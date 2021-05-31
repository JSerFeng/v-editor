import { FC, Dispatch, RefObject, ComponentClass } from "react";
import { Dispatch as ReduxDispatch } from "redux";
import type { WidgetConfig, WidgetProps } from "./interfaces";
import EventEmitter from "../utils/eventEmitter";
interface WrapperProps {
    selected: boolean;
    widgetConfig: WidgetConfig;
    idx: number;
    container: RefObject<HTMLDivElement>;
    setRefLines: Dispatch<[number, number, number][]>;
    dispatch: ReduxDispatch;
    allWidgets: WidgetConfig[];
    createWidgets: (config: WidgetConfig) => FC<WidgetProps> | ComponentClass<WidgetProps> | null;
    eventPool: EventEmitter;
}
export declare const RenderWidget: FC<WrapperProps>;
declare const _default: import("react-redux").ConnectedComponent<FC<WrapperProps>, import("react-redux").Omit<WrapperProps, "allWidgets" | "dispatch">>;
export default _default;
