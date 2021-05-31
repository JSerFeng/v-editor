import { FC } from "react";
import { Dispatch } from "redux";
import { Tools } from "../../../store/editorReducer";
declare const _default: import("react-redux").ConnectedComponent<FC<{
    dispatch: Dispatch<import("redux").AnyAction>;
    workPlace: {
        renderConfig: import("../../../render/interfaces").RenderConfig;
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
        selectArea: import("../../../store/editorReducer").Pos;
        undoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: Tools | null;
        }[];
        redoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: Tools | null;
        }[];
        selectedTool: Tools | null;
        tmpPos: import("../../../store/editorReducer").Pos[];
    };
}>, import("react-redux").Omit<{
    dispatch: Dispatch<import("redux").AnyAction>;
    workPlace: {
        renderConfig: import("../../../render/interfaces").RenderConfig;
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
        selectArea: import("../../../store/editorReducer").Pos;
        undoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: Tools | null;
        }[];
        redoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: Tools | null;
        }[];
        selectedTool: Tools | null;
        tmpPos: import("../../../store/editorReducer").Pos[];
    };
}, "dispatch" | "workPlace">>;
export default _default;
