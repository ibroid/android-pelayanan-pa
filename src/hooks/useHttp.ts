import { useState, useEffect, useContext } from "react";
import axios, { AxiosResponse, Method } from "axios";
import { link } from "../backend.json";
import { AuthContext } from "../context/AuthContext";

const useHttp = <T>(url: string, timeout?: number) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState<{ message: string, status: string } | null>(null);
	const [loading, setLoading] = useState(true);

	const { state } = useContext(AuthContext)

	useEffect(() => {
		let unmounted = false;
		let source = axios.CancelToken.source();

		if (state.userToken) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${state.userToken}`
		}

		axios.get(url, {
			cancelToken: source.token,
			timeout: timeout,
			baseURL: link,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}

		})
			.then(response => {
				if (!unmounted) {
					setData(response.data);
					setLoading(false);
				}
			}).catch(function (e) {
				if (!unmounted) {
					setError(true);
					setErrorMessage(e.response.data);
					setLoading(false);
				}
			});
		return function () {
			unmounted = true;
			source.cancel("Cancelling in cleanup");
		};
	}, [url, timeout]);

	return { data, loading, error, errorMessage };
};

export default useHttp;