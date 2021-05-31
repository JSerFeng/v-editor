import { Reducer } from 'redux';
import { RenderConfig, WidgetConfig } from '../render/interfaces';
export interface Pos {
    w: number;
    h: number;
    x: number;
    y: number;
}
declare type MemoState = Pick<BaseState["workplace"], "renderConfig" | "selectedIndex" | "selectArea" | "selectedTool">;
export interface BaseState {
    workplace: {
        renderConfig: RenderConfig;
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
        selectArea: Pos;
        undoStack: MemoState[];
        redoStack: MemoState[];
        selectedTool: Tools | null;
        tmpPos: Pos[]; /**暂存一些位置信息，用与多选在整体移动时，记住开始移动的位置 */
    };
}
export declare enum Types {
    RenderConfig = "RenderConfig",
    SelectMultiple = "SelectMultiple",
    SelectOne = "SelectOne",
    AddItem = "AddItem",
    WidgetConfig = "WidgetConfig",
    ChangeCanvasWH = "ChangeCanvasWH",
    StartWidgetChange = "StartWidgetChange",
    ChangeWidgetPos = "ChangeWidgetPos",
    CommitWidgetPosChange = "CommitWidgetPosChange",
    DeleteItem = "DeleteItem",
    CopySelected = "CopySelected",
    ResetDraw = "ResetDraw",
    ChangeWorkingPos = "ChangeWorkingPos",
    Undo = "Undo",
    Redo = "Redo",
    MoveCanvasToCenter = "MoveCanvasToCenter",
    SetInitCanvasPos = "SetInitCanvasPos",
    SelectTools = "SelectTools"
}
/**编辑器可选择工具 */
export declare enum Tools {
    Drag = "Drag",
    Select = "Select"
}
export declare const EditorActions: {
    actSelect: (indexes: number[] | null) => {
        type: Types.SelectMultiple;
        payload: number[] | null;
    };
    actSelectOne: (idx: number | null) => {
        type: Types.SelectOne;
        payload: number | null;
    };
    actChangeCanvasWH: (pos: {
        w: number;
        h: number;
    }) => {
        type: Types.ChangeCanvasWH;
        payload: {
            w: number;
            h: number;
        };
    };
    actAddItem: (config: WidgetConfig) => {
        type: Types.AddItem;
        payload: WidgetConfig;
    };
    actWidgetConfig: (config: WidgetConfig) => {
        type: Types.WidgetConfig;
        payload: WidgetConfig;
    };
    actStartWidgetPos: (initPos: Pos) => {
        type: Types.StartWidgetChange;
        payload: Pos;
    };
    actChangeWidgetPos: (deltaX: number, deltaY: number) => {
        type: Types.ChangeWidgetPos;
        payload: {
            deltaX: number;
            deltaY: number;
        };
    };
    actCommitChangeWidgetPos: (pos: Pos) => {
        type: Types.CommitWidgetPosChange;
        payload: Pos;
    };
    actDeleteItems: () => {
        type: Types.DeleteItem;
        payload: null;
    };
    actCopySelectedItems: () => {
        type: Types.CopySelected;
        payload: null;
    };
    actResetDraw: () => {
        type: Types.ResetDraw;
        payload: null;
    };
    actChangeWorkingPos: (pos: {
        x: number;
        y: number;
        scale: number;
    }) => {
        type: Types.ChangeWorkingPos;
        payload: {
            x: number;
            y: number;
            scale: number;
        };
    };
    actUndo: () => {
        type: Types.Undo;
        payload: null;
    };
    actRedo: () => {
        type: Types.Redo;
        payload: null;
    };
    actMoveCanvasToCenter: () => {
        type: Types.MoveCanvasToCenter;
        payload: null;
    };
    actSetInitCanvasPos: (pos: {
        x: number;
        y: number;
        scale: number;
    }) => {
        type: Types.SetInitCanvasPos;
        payload: {
            x: number;
            y: number;
            scale: number;
        };
    };
    actSelectTool: (tool: Tools | null) => {
        type: Types.SelectTools;
        payload: Tools | null;
    };
};
export declare type GetActionTypes<A extends {
    [k: string]: (...args: any[]) => {
        type: Types;
        payload: any;
    };
}> = {
    [K in keyof A]: ReturnType<A[K]>;
}[keyof A];
declare const reducer: Reducer<BaseState, GetActionTypes<typeof EditorActions>>;
export default reducer;
