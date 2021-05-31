export declare enum ErrorCode {
    Success = 200,
    Error = 500
}
export interface Res<T = null> {
    code: ErrorCode;
    data: T;
    message: string;
}
export declare const request: import("axios").AxiosInstance;
