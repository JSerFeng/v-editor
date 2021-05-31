import { FC } from "react";
import { Dispatch } from "redux";
import { WidgetPackage } from "../../render/interfaces";
import WidgetsCenter from "../../render/WidgetsCenter";
declare const _default: import("react-redux").ConnectedComponent<FC<{
    widgetsCenter: WidgetsCenter;
    dispatch: Dispatch<import("redux").AnyAction>;
    allWidgets: WidgetPackage[];
}>, import("react-redux").Omit<{
    widgetsCenter: WidgetsCenter;
    dispatch: Dispatch<import("redux").AnyAction>;
    allWidgets: WidgetPackage[];
}, "dispatch">>;
export default _default;
