import { ReactComp, WidgetConfig, WidgetConfigProp, WidgetDescription, WidgetPackage, WidgetProps } from "./interfaces";
declare type WidgetsMap = Map<string, WidgetPackage>;
declare class WidgetsCenter {
    widgetsMap: WidgetsMap;
    subQueue: ((...args: any[]) => any)[];
    constructor(initMap?: WidgetsMap);
    static createConfig(info: WidgetDescription): {
        name: string;
        editorConfig: ({
            key: string;
            name: string;
            type: import("./interfaces").EditorTypes.Color;
        } | {
            key: string;
            name: string;
            type: import("./interfaces").EditorTypes.Upload;
            options: Record<string, any>;
        } | {
            key: string;
            name: string;
            type: import("./interfaces").EditorTypes.Text;
        } | {
            key: string;
            name: string;
            type: import("./interfaces").EditorTypes.Number;
        } | {
            key: string;
            name: string;
            type: import("./interfaces").EditorTypes.Select;
            options: {
                label: string;
                value: string;
            }[];
        })[];
        config: Record<string, any>;
        pos: import("./interfaces").Pos;
    };
    use(widget: WidgetPackage): void;
    notify(): void;
    subscribe(cb: (all: WidgetPackage[]) => any): void;
    get(widgetConfig: WidgetConfig | string): WidgetPackage | null;
    getAll(): WidgetPackage[];
    create(widgetName: string): WidgetConfig | null;
}
export default WidgetsCenter;
export declare const createPkg: (Comp: ReactComp<WidgetProps>, options: WidgetDescription, Configuration?: ReactComp<WidgetConfigProp> | undefined) => WidgetPackage;
