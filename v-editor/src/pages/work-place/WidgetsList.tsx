import { notification, Tooltip } from "antd"
import { FC } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { WidgetPackage } from "../../render/interfaces"
import WidgetsCenter from "../../render/WidgetsCenter"
import { BaseState } from "../../store"
import { EditorActions } from "../../store/editorReducer"

const { actAddItem } = EditorActions

const WidgetsList: FC<{
  widgetsCenter: WidgetsCenter,
  dispatch: Dispatch,
  allWidgets: WidgetPackage[]
}> = ({ widgetsCenter, dispatch, allWidgets }) => {
  const addWidget = (name: string) => {
    const widgetConfig = widgetsCenter.create(name)
    if (widgetConfig) {
      dispatch(actAddItem(widgetConfig))
    } else {
      notification.info({
        message: "未知错误，没有找到组件"
      })
    }
  }
  return (
    <div className="widgets">
      <div>
        组件列表
      </div>
      <div className="widgets-list flex jb">

        {
          allWidgets.map(({ description, FC }, i) => (
            <Tooltip key={ i } title={ description.description || description.showName } color="blue" placement="right">
              <div
                className="widgets-list-item" onClick={ addWidget.bind(null, description.name) }
                onDragStart={ e => {
                  e.dataTransfer.setData("name", description.name)
                } }
                draggable
              >
                {
                  description.snapShot && <img className="sm-pic" src={ description.snapShot } alt={ description.name } />
                }
                <div>{ description.showName }</div>
                <FC { ...description } pos={ { x: 0, y: 0, w: 80, h: 80 } } />
              </div>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}

export default connect(
  (state: BaseState) => ({}),
  dispatch => ({ dispatch })
)(WidgetsList)
