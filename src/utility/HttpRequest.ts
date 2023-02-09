import axios, { AxiosInstance } from "axios";
import { link } from "../backend.json";
import * as qs from "qs";

class HttpClient {
    public request: AxiosInstance;
    constructor() {
        this.request = axios.create({
            baseURL: link
        })
    }

    setHeaderXForm() {
        this.request.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        return this;
    }

    setHeaderJson() {
        this.request.defaults.headers.common['Accept'] = 'application/json';
        this.request.defaults.headers.common['Content-Type'] = 'application/json';
        return this;
    }

    setAuthorizationToken(token: string) {
        this.request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return this;
    }

    setBodyJson<T>(body: T | any) {
        this.request.defaults.data = JSON.stringify(body);
        return this.request;
    }

    setBodyXForm<T>(body: T | any) {
        this.request.defaults.data = qs.stringify(body);
        this.request.defaults.method = 'POST'
        return this.request;
    }
}

export default new HttpClient();