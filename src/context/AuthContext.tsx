import * as React from 'react';
import { IAuthContext } from "../interfaces/ContextInterface"
import EncryptedStorage from "react-native-encrypted-storage";

export const AuthContext = React.createContext<IAuthContext>({
	isLoading: true,
	isSignout: false,
	userToken: null,
});

type ACTIONTYPE =
	| {
		token: string; type: "RESTORE_TOKEN";
	}
	| {
		token: string; type: "SIGN_IN";
	}
	| { type: "SIGN_OUT"; };


export const AuthProvider = ({ children }: any) => {

	const reducer = (state: IAuthContext, action: ACTIONTYPE) => {
		switch (action.type) {
			case 'RESTORE_TOKEN':
				return {
					...state,
					userToken: action.token,
					isLoading: false,
				};
			case 'SIGN_IN':
				return {
					...state,
					isSignout: false,
					userToken: action.token,
				};
			case 'SIGN_OUT':
				return {
					...state,
					isSignout: true,
					userToken: null,
				};
		}
	}

	const [state, dispatch] = React.useReducer(reducer, {
		isLoading: true,
		isSignout: false,
		userToken: null,
	});

	const authContext = React.useMemo(
		() => ({
			signIn: async (token: string) => {
				try {
					await EncryptedStorage.setItem("token", token);
				} catch (error) {
					console.log(error)
				}
				dispatch({ type: 'SIGN_IN', token: token });
			},
			signOut: async () => {
				try {
					await EncryptedStorage.removeItem("token");;
				} catch (error) {
					console.log(error)
				}
				dispatch({ type: 'SIGN_OUT' })
			},
			signUp: async (token: string) => {
				try {
					await EncryptedStorage.setItem("token", token);
				} catch (error) {
					console.log(error)
				}
				dispatch({ type: 'SIGN_IN', token: token });
			},
			restore: (token) => {
				dispatch({ type: 'RESTORE_TOKEN', token: token });
			}
		}),
		[]
	);


	return (
		<AuthContext.Provider value={{ state, authContext }}>
			{children}
		</AuthContext.Provider>
	)
}