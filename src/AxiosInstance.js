import axios from "axios";
const AxiosInstance=axios.create()
AxiosInstance.interceptors.request.use((config)=>{
    config.baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api"
        : process.env.REACT_APP_PRODUCTION_URL;
    config.headers['Authorization']=`Bearer ${localStorage.getItem("token")}`
    return config
})
export default AxiosInstance