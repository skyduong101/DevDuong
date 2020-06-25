import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'token';
const TOKEN_EXPIRES_KEY = 'token_expires';

export default class SecureStoreService {
    static async getAuthTokenAsync() {
        let token = null;

        try {
            token = await SecureStore.getItemAsync(TOKEN_KEY);
        } catch (err) {
            console.log(err);
        }

        return token;
    }

    static async getAuthTokenExpiresAsync() {
        let tokenExpires = null;

        try {
            tokenExpires = await SecureStore.getItemAsync(TOKEN_EXPIRES_KEY);
        } catch (err) {
            console.log(err);
        }

        return tokenExpires;
    }

    static async checkAuthTokenExistsAsync() {
        const token = await SecureStoreService.getAuthTokenAsync();

        return typeof token === 'string' && token.length > 0;
    }

    static async checkAuthTokenExpiredAsync() {
        const tokenExpires = await SecureStoreService.getAuthTokenExpiresAsync();

        return typeof tokenExpires === 'string' && new Date().getTime() > new Date(tokenExpires).getTime();
    }

    static async setAuthTokenAsync(token, tokenExpires) {
        try {
            await SecureStore.setItemAsync(TOKEN_KEY, token);
            await SecureStore.setItemAsync(TOKEN_EXPIRES_KEY, tokenExpires);
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteAuthTokenAsync() {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            await SecureStore.deleteItemAsync(TOKEN_EXPIRES_KEY);
        } catch (err) {
            console.log(err);
        }
    }
}
