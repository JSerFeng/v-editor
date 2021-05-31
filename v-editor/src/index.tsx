import './index.css';
import "antd/dist/antd.css"
import WorkPlace from "./pages/work-place"
import { Provider } from "react-redux"
import { store } from "./store"
import { FC } from "react"
import WidgetsCenter from "./render/WidgetsCenter"
import { widgetsCenter as defaultWidgetsCenter } from "./widgets"
export { widgetsCenter } from "./widgets"

export const Editor: FC<{
  widgetsCenter?: WidgetsCenter
}> = ({ widgetsCenter }) => {
  return <Provider store={ store }>
    <WorkPlace widgetsCenter={ widgetsCenter || defaultWidgetsCenter } />
  </Provider>
}
