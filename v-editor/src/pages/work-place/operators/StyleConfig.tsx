import { IconButton, TextField } from "@material-ui/core"
import { Add, Delete } from "@material-ui/icons"
import produce from "immer";
import { FC, useState } from "react";
import { Dispatch } from "redux";
import { WidgetConfig } from "../../../render/interfaces";
import { EditorActions } from "../../../store/editorReducer";
import { isUndef } from "../../../utils";

const { actWidgetConfig } = EditorActions

interface StyleConfigProps {
  widgetConfig: WidgetConfig | WidgetConfig[] | null,
  dispatch: Dispatch,
}

const StyleConfig: FC<StyleConfigProps> = ({ widgetConfig, dispatch }) => {
  const [key, setKey] = useState("")
  const [val, setVal] = useState("")

  const configs = widgetConfig === null
    ? []
    : Array.isArray(widgetConfig)
      ? widgetConfig
      : [widgetConfig]

  return (
    <div>
      {
        configs.map(
          (config, i) => {
            const { name, style } = config
            return <div key={ i }>
              <div>组件 { name } 的样式</div>
              <div>
                { isUndef(style)
                  ? "无默认样式"
                  : Reflect.ownKeys(style).map((k, i) => (
                    <div key={ k as string } className="flex jb ac">
                      {/* @ts-ignore */ }
                      { k } : { style[k] }
                      <IconButton color="secondary"
                        onClick={
                          () => {
                            dispatch(actWidgetConfig(produce(config, it => {
                              /**@ts-ignore */
                              delete it.style[k]
                            })))
                          }
                        }
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  ))
                }
              </div>
              <div className="flex jb ac">
                <TextField placeholder="key" value={ key } onChange={ e => setKey(e.target.value) } />
                &nbsp; : &nbsp;
                <TextField placeholder="value" value={ val } onChange={ e => setVal(e.target.value) } />
                <IconButton onClick={
                  () => dispatch(actWidgetConfig(produce(config, (it) => {
                    if (isUndef(it.style)) {
                      it.style = {}
                    }
                    /**@ts-ignore */
                    it.style[key] = val
                  })))
                } >
                  <Add color="primary" />
                </IconButton>
              </div>
            </div>
          }
        )
      }
    </div>
  )
}

export default StyleConfig
