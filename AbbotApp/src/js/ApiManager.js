import Axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';
import SecureStoreService from './SecureStoreService';

export default class ApiManager {
    /** @type {ApiManager} */
    static instance = null; // Don't call field directly. Use getInstance()

    /** @type {AxiosInstance} */
    axios = null;

    authHeaderInterceptorId = null;

    constructor() {
        const axiosConfig = { baseURL: API_BASE_URL, timeout: 5000, headers: { 'Content-Type': 'application/json' } };

        this.axios = Axios.create(axiosConfig);
    }

    /**
     * @returns {ApiManager}
     */
    static getInstance() {
        if (ApiManager.instance === null) {
            ApiManager.instance = new ApiManager();

            // Check if token is in SecureStorage and set in header to new instance's axios.
            (async function useAuthHeaderCheckState() {
                await ApiManager.instance.useAuthHeader();
            })();
        }

        return this.instance;
    }

    async useAuthHeader() {
        const tokenExists = await SecureStoreService.checkAuthTokenExistsAsync();

        if (tokenExists) {
            const token = await SecureStoreService.getAuthTokenAsync();

            this.authHeaderInterceptorId = this.axios.interceptors.request.use((config) => {
                config.headers.Authorization = `Bearer ${token}`;

                return config;
            });
        }
    }

    clearAuthHeader() {
        if (this.authHeaderInterceptorId !== null) {
            this.axios.interceptors.request.eject(this.authHeaderInterceptorId);

            this.authHeaderInterceptorId = null;
        }
    }
}
