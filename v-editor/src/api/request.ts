import axios from 'axios'
import { notification } from "antd"

const baseURL = "http://localhost:62388"

export const request = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})

request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    notification.info({
      message: "网络连接失败\n" + err
    })
  }
)
