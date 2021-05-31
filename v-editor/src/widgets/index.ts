import WidgetsCenter from "../render/WidgetsCenter"
import Text from "../widgets/text"
import Rectangle from "./rectangle"
import NotFound from "./not-found"
import Svg from "./svg"


export const widgetsCenter = new WidgetsCenter()

widgetsCenter.use(Text)
widgetsCenter.use(Rectangle)
widgetsCenter.use(NotFound)
widgetsCenter.use(Svg)
