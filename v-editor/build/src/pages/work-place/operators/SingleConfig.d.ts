/// <reference types="react" />
import { Dispatch as ReduxDispatch } from "redux";
import { ReactComp, WidgetConfig, WidgetConfigProp } from "../../../render/interfaces";
declare const _default: import("react").NamedExoticComponent<{
    widgetConfig: WidgetConfig;
    dispatch: ReduxDispatch<import("redux").AnyAction>;
    CustomConfig?: ReactComp<WidgetConfigProp> | null | undefined;
}>;
export default _default;
