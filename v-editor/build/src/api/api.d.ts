export declare enum ErrorCode {
    Success = 200,
    Error = 500
}
export interface Res<T = any> {
    data: T;
    code: ErrorCode;
    message: string;
}
export declare const apiGenerate: () => Promise<Res<any>>;
