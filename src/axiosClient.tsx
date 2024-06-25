import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:8000/api",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = window.localStorage.getItem("ACCESS_TOKEN");
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error: AxiosError) => {
		const { response } = error;
		if (response?.status === 401) {
			window.localStorage.removeItem("ACCESS_TOKEN");
		}
		throw error;
	}
);
export default axiosClient;
