import { ComponentClass, FC } from 'react';
import { Dispatch } from "redux";
import { Tools } from '../store/editorReducer';
import { WidgetConfig, WidgetProps } from './interfaces';
import "./style.scss";
import EventEmitter from '../utils/eventEmitter';
import WidgetsCenter from './WidgetsCenter';
declare const _default: import("react-redux").ConnectedComponent<FC<{
    workplace: {
        renderConfig: import("./interfaces").RenderConfig;
        selectedIndex: number[] | null;
        canvas: {
            x: number;
            y: number;
            scale: number;
            centerPosition: {
                x: number;
                y: number;
                scale: number;
            };
        };
        selectArea: import("../store/editorReducer").Pos;
        undoStack: {
            renderConfig: import("./interfaces").RenderConfig;
            selectArea: import("../store/editorReducer").Pos;
            selectedIndex: number[] | null;
            selectedTool: Tools | null;
        }[];
        redoStack: {
            renderConfig: import("./interfaces").RenderConfig;
            selectArea: import("../store/editorReducer").Pos;
            selectedIndex: number[] | null;
            selectedTool: Tools | null;
        }[];
        selectedTool: Tools | null;
        tmpPos: import("../store/editorReducer").Pos[];
    };
    dispatch: Dispatch<import("redux").AnyAction>;
    createWidgets: (config: string | WidgetConfig) => FC<WidgetProps<any>> | ComponentClass<WidgetProps<any>, any> | null;
    widgetsCenter: WidgetsCenter;
    eventPool: EventEmitter;
}>, import("react-redux").Omit<{
    workplace: {
        renderConfig: import("./interfaces").RenderConfig;
        selectedIndex: number[] | null;
        canvas: {
            x: number;
            y: number;
            scale: number;
            centerPosition: {
                x: number;
                y: number;
                scale: number;
            };
        };
        selectArea: import("../store/editorReducer").Pos;
        undoStack: {
            renderConfig: import("./interfaces").RenderConfig;
            selectArea: import("../store/editorReducer").Pos;
            selectedIndex: number[] | null;
            selectedTool: Tools | null;
        }[];
        redoStack: {
            renderConfig: import("./interfaces").RenderConfig;
            selectArea: import("../store/editorReducer").Pos;
            selectedIndex: number[] | null;
            selectedTool: Tools | null;
        }[];
        selectedTool: Tools | null;
        tmpPos: import("../store/editorReducer").Pos[];
    };
    dispatch: Dispatch<import("redux").AnyAction>;
    createWidgets: (config: string | WidgetConfig) => FC<WidgetProps<any>> | ComponentClass<WidgetProps<any>, any> | null;
    widgetsCenter: WidgetsCenter;
    eventPool: EventEmitter;
}, "workplace" | "dispatch">>;
export default _default;
