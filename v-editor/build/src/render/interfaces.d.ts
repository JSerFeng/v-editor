import { ComponentClass, CSSProperties, FC } from "react";
import EventEmitter from "../utils/eventEmitter";
export declare enum EditorTypes {
    Color = "Color",
    Upload = "Upload",
    Text = "Text",
    Number = "Number",
    Select = "Select"
}
export declare type EditorConfig<T extends EditorTypes = EditorTypes> = T extends EditorTypes.Number | EditorTypes.Text | EditorTypes.Color ? {
    key: string;
    name: string;
    type: T;
} : {
    key: string;
    name: string;
    type: T;
    options: T extends EditorTypes.Select ? {
        label: string;
        value: string;
    }[] : T extends EditorTypes.Upload ? Record<string, any> : never;
};
export declare type ReactComp<T> = FC<T> | ComponentClass<T>;
export interface Pos {
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface WidgetConfig {
    name: string;
    editorConfig: EditorConfig[];
    config: Record<string, any>;
    pos: Pos;
    style?: Partial<CSSProperties>;
}
export interface RenderConfig {
    widgets: WidgetConfig[];
    pos: {
        w: number;
        h: number;
    };
}
export interface WidgetDescription {
    name: string;
    version?: string;
    showName: string;
    editorConfig: EditorConfig[];
    config: Record<string, any>;
    initPos?: Pos;
    style?: Partial<CSSProperties>;
    snapShot?: string;
    description?: string;
}
export interface WidgetProps<T = any> {
    config: T;
    pos: Pos;
    style?: Partial<CSSProperties>;
    eventPool?: EventEmitter;
}
export interface WidgetConfigProp {
    widgetConfig: WidgetConfig;
    dispatchConfig: (widgetConfig: WidgetConfig) => void;
}
export interface WidgetPackage {
    FC: ReactComp<WidgetProps>;
    description: WidgetDescription;
    Configuration?: ReactComp<WidgetConfigProp>;
}
export declare type TransformConfig<T> = T extends Array<infer Item> ? Item extends {
    key: infer Key;
} ? Key extends string ? {
    [P in Key]: any;
} : {} : {} : T;
