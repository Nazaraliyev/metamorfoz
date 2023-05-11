import axios from "axios";

const axiosInstance = axios.create({
  url: "https://api/",
});

const fetchVisitors = () => axiosInstance.get("/");

const submitVisitor = () => axiosInstance.post("/");

export { fetchVisitors, submitVisitor };
