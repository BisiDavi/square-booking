import axios from "axios";
import { useAppSelector } from "./useRedux";

export default function useAxios() {
  const { merchant } = useAppSelector((state) => state.Auth);
  const axiosInstance = axios.create({
    baseURL: "https://connect.squareup.com/v2/",
    headers: { "X-Custom-Header": "foobar" },
  });
}
