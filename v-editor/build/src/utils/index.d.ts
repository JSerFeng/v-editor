export declare enum StickFlags {
    STICK_ROW = /**  */ 1,
    STICK_COL = /**  */ 2,
    NO_STICK = /**   */ 0
}
export declare const createRefLine: ({ x: l, w: width, h: height, y: t }: {
    x: number;
    w: number;
    h: number;
    y: number;
}, others: {
    x: number;
    y: number;
    w: number;
    h: number;
}[], stickTo?: StickFlags, showSelf?: boolean | undefined) => [[number, number, number][], number, number];
export declare const isUndef: (target: unknown) => target is null | undefined;
export declare function withConfirm(message: string, cb: () => void): void;
export declare function deepCopy<T>(obj: T): T;
/**获取到屏幕左边的距离 */
export declare function getOffsetLeft(node: HTMLElement | null): number;
/**获取到屏幕上边的距离 */
export declare function getOffsetTop(node: HTMLElement | null): number;
