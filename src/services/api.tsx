import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";
import { toast } from "react-toastify";

class ApiService {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "https://turkbuxoroeku-js.onrender.com/api",
            headers: { "Content-Type": "application/json" },
            timeout: 15000,
            validateStatus: (status) => status >= 200 && status < 300,
        });

        this.setupInterceptors();
    }

    private setupInterceptors() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                if (error.response) {
                    const message =
                        (error.response.data as any)?.message ||
                        `Server xatosi: ${error.response.status}`;
                    toast.error(message);
                } else {
                    toast.error(error.message);
                }
                return Promise.reject(error);
            }
        );
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const res = await this.instance.get<T>(url, config);
        return res.data;
    }

    public async post<T, B = any>(
        url: string,
        body: B,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const res = await this.instance.post<T>(url, body, config);
        return res.data;
    }

    public async put<T, B = any>(
        url: string,
        body: B,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const res = await this.instance.put<T>(url, body, config);
        return res.data;
    }

    public async delete<T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const res = await this.instance.delete<T>(url, config);
        return res.data;
    }
}

const api = new ApiService();
export default api;
