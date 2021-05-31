import { request } from "./request";

export enum ErrorCode {
  Success = 200,
  Error = 500
}

export interface Res<T = any> {
  data: T,
  code: ErrorCode,
  message: string
}

export const apiGenerate = () => request.post("/generate") as Promise<Res>
