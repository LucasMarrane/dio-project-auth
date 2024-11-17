import axios from 'axios';

export abstract class AuthApi {
    protected static get _httpClient() {
        return axios.create({
            baseURL: 'http://localhost:8001',
        });
    }
}
