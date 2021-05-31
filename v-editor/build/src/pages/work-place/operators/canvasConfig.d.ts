/// <reference types="react" />
import { Dispatch } from "redux";
declare const _default: import("react-redux").ConnectedComponent<import("react").NamedExoticComponent<{
    dispatch: Dispatch<import("redux").AnyAction>;
    workplace: {
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
            selectedTool: import("../../../store/editorReducer").Tools | null;
        }[];
        redoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: import("../../../store/editorReducer").Tools | null;
        }[];
        selectedTool: import("../../../store/editorReducer").Tools | null;
        tmpPos: import("../../../store/editorReducer").Pos[];
    };
}>, import("react-redux").Omit<{
    dispatch: Dispatch<import("redux").AnyAction>;
    workplace: {
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
            selectedTool: import("../../../store/editorReducer").Tools | null;
        }[];
        redoStack: {
            renderConfig: import("../../../render/interfaces").RenderConfig;
            selectedIndex: number[] | null;
            selectArea: import("../../../store/editorReducer").Pos;
            selectedTool: import("../../../store/editorReducer").Tools | null;
        }[];
        selectedTool: import("../../../store/editorReducer").Tools | null;
        tmpPos: import("../../../store/editorReducer").Pos[];
    };
}, "workplace" | "dispatch">>;
export default _default;
