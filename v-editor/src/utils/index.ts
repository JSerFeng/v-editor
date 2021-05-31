import { Modal } from "antd"


const SPACE = 20 /**参考线显示距离 */
const STICK_SPACE = 5 /**吸附距离 */

export enum StickFlags {
  STICK_ROW = /**  */ 1 << 0,
  STICK_COL = /**  */ 1 << 1,
  NO_STICK = /**   */ 0,
}


export const createRefLine = (
  { x: l, w: width, h: height, y: t }: { x: number, w: number, h: number, y: number },
  others: { x: number, y: number, w: number, h: number }[],
  stickTo: StickFlags = StickFlags.NO_STICK,
  showSelf?: boolean
): [[number, number, number][], number, number] => {
  const midX = l + width / 2
  const midY = t + height / 2
  const b = t + height
  const r = l + width
  const lines: [number, number, number][] = []

  for (const item of others) {
    const { x, y, w, h } = item
    /**判断一下长或者宽是否相等 */
    let equalWidth = false
    if (w === width) {
      equalWidth = true
    }
    let equalHeight = false
    if (h === height) {
      equalHeight = true
    }

    /**中线 */
    const mX = w / 2 + x
    const mY = h / 2 + y
    let space: number

    /**水平中线和中线对齐 */
    if ((space = Math.abs(mX - midX)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = equalWidth ? x : mX - width / 2
      } else if (showSelf) {
        lines.push([1, midX, 1])
      }
      lines.push([1, mX, 0])
    }
    /**垂直方向中线和中线对齐 */
    if ((space = Math.abs(mY - midY)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_COL) {
        t = equalHeight ? y : mY - height / 2
      } else if (showSelf) {
        lines.push([0, midY, 1])
      }
      lines.push([0, mY, 0])
    }
    /**左边和其它竖直中线对齐 */
    if ((space = Math.abs(mX - l)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = mX
      } else if (showSelf) {
        lines.push([1, l, 1])
      }
      lines.push([1, mX, 0])
    }
    /**右边和其它竖直中线对齐 */
    if ((space = Math.abs(l + width - mX)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = mX - width
      } else if (showSelf) {
        lines.push([1, l + width, 1])
      }
      lines.push([1, mX, 0])
    }
    /**顶部和其它水平中线对齐 */
    if ((space = Math.abs(t - mY)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        t = mY
      } else if (showSelf) {
        lines.push([0, t, 1])
      }
      lines.push([0, mY, 0])
    }
    /**底部和其它水平中线对齐 */
    if ((space = Math.abs(t + height - mY)) < SPACE) {
      /**能吸附 */
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        t = mY - height
      } else if (showSelf) {
        lines.push([0, t + height, 1])
      }
      lines.push([0, mY, 0])
    }
    /**当前选择顶部，和其它顶部吸附 */
    if ((space = Math.abs(t - y)) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_COL) {
        t = y
      } else if (showSelf) {
        lines.push([0, t, 1])
      }
      lines.push([0, y, 0])
    }
    /**当前选择顶部，和其它底部吸附 */
    if ((space = Math.abs(t - (y + h))) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_COL) {
        t = y + h
      } else if (showSelf) {
        lines.push([0, t, 1])
      }
      lines.push([0, y + h, 0])
    }
    /**当前选择底部，和其它顶部吸附 */
    if ((space = Math.abs(b - y)) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_COL) {
        t = y - height
      } else if (showSelf) {
        lines.push([0, b, 1])
      }
      lines.push([0, y, 0])
    }
    /**当前选择底部，和其它底部吸附 */
    if ((space = Math.abs(b - (y + h))) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_COL) {
        t = y + h - height
      } else if (showSelf) {
        lines.push([0, b, 1])
      }
      lines.push([0, y + h, 0])
    }
    /**当前选择左边，和其它左边吸附 */
    if ((space = Math.abs(l - x)) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = x
      } else if (showSelf) {
        lines.push([1, l, 1])
      }
      lines.push([1, x, 0])
    }
    /**当前选择左边，和其它右边吸附 */
    if ((space = Math.abs(l - (x + w))) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = x + w
      } else if (showSelf) {
        lines.push([1, l, 1])
      }
      lines.push([1, x + w, 0])
    }
    /**当前选择右边，和其它左边吸附 */
    if ((space = Math.abs(r - x)) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = x - width
      } else if (showSelf) {
        lines.push([1, r, 1])
      }
      lines.push([1, x, 0])
    }
    /**当前选择右边，和其它右边吸附 */
    if ((space = Math.abs(r - (x + w))) < SPACE) {
      if (space <= STICK_SPACE && stickTo & StickFlags.STICK_ROW) {
        l = x + w - width
      } else if (showSelf) {
        lines.push([1, r, 1])
      }
      lines.push([1, x + w, 0])
    }
  }

  return [lines, l, t]
}

export const isUndef = (target: unknown): target is undefined | null => {
  return target === undefined || target === null
}

const { confirm } = Modal;

export function withConfirm(message: string, cb: () => void) {
  confirm({
    title: message,
    onOk: cb,
    okText: "确认",
    cancelText: "取消"
  })
}

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**获取到屏幕左边的距离 */
export function getOffsetLeft(node: HTMLElement | null) {
  let offsetLeft = 0

  while (node && node.offsetLeft) {
    offsetLeft += node.offsetLeft
    node = node.offsetParent as HTMLElement
  }

  return offsetLeft
}

/**获取到屏幕上边的距离 */
export function getOffsetTop(node: HTMLElement | null) {
  let offsetTop = 0

  while (node && node.offsetTop) {
    offsetTop += node.offsetTop
    node = node.offsetParent as HTMLElement
  }

  return offsetTop
}

