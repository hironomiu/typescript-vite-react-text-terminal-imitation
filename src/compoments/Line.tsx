import { useState } from 'react'
import Prompt from './Prompt'
import PastLine from './PastLine'
import { useAtom } from 'jotai'
import { valuesAtom } from '../jotai/global'

let isOnControlKey = false
let isOnBKey = false
let isOnFKey = false

type LineType = {
  index: number
  value: string
  activeLine: boolean
}
const Line = ({ index, value, activeLine }: LineType) => {
  const [, setValues] = useAtom(valuesAtom)
  // TODO 型
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineRef = (el: any) => (el ? el.focus() : null)
  const [cursorPoint, setCursorPoint] = useState(0)

  const moveLeft = (cursorPoint: number) => {
    if (cursorPoint < value.length)
      setCursorPoint((cursorPoint) => ++cursorPoint)
  }
  const moveRight = (cursorPoint: number) => {
    if (cursorPoint > 0) setCursorPoint((cursorPoint) => --cursorPoint)
  }

  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // カーソル移動 & フラグ立て
    switch (event.key) {
      case 'Control':
        isOnControlKey = true
        break
      case 'b':
        isOnBKey = true
        break
      case 'f':
        isOnFKey = true
        break
      case 'ArrowLeft':
        moveLeft(cursorPoint)
        break
      case 'ArrowRight':
        moveRight(cursorPoint)
        break
      default:
        break
    }

    // カーソル移動
    if (isOnBKey && isOnControlKey) moveLeft(cursorPoint)
    if (isOnFKey && isOnControlKey) moveRight(cursorPoint)

    if (
      event.key === 'Shift' ||
      event.key === 'Meta' ||
      event.key === 'Control' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown'
    ) {
      null
    } else if (event.key === 'Enter') {
      setValues((values: string[]) => [...values, ''])
    } else if (event.key === 'Backspace') {
      setValues((values: string[]) => {
        const array = [...values]
        array[index] = values[index].slice(0, values[index].length - 1)
        return array
      })
    } else {
      if (!isOnControlKey) {
        setValues((values: string[]) => {
          const array = [...values]
          if (cursorPoint === 0) {
            array[index] = values[index] + event.key
          } else {
            // カーソル移動した位置に入力値を差し込む
            const newValue =
              values[index].slice(0, values[index].length - cursorPoint) +
              event.key +
              values[index].slice(
                values[index].length - cursorPoint,
                values[index].length
              )
            array[index] = newValue
          }
          return array
        })
      }
    }
  }

  const keyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('keyUp')
    switch (event.key) {
      case 'b':
        isOnBKey = false
        break
      case 'f':
        isOnFKey = false
        break
      case 'Control':
        isOnControlKey = false
        break
      default:
        break
    }
  }

  return (
    <div
      onKeyDown={(event) => keyDown(event)}
      onKeyUp={(event) => keyUp(event)}
      tabIndex={activeLine ? 0 : undefined}
      ref={activeLine ? lineRef : null}
      className="outline-none"
    >
      <Prompt />
      {activeLine ? (
        <>
          {cursorPoint > 0 ? (
            <>
              <span>{value.slice(0, value.length - cursorPoint)}</span>
              <span className="blink">
                {value.slice(
                  value.length - cursorPoint,
                  value.length - cursorPoint + 1
                )}
              </span>
              <span>{value.slice(value.length - cursorPoint + 1)}</span>
            </>
          ) : (
            <>
              <span>{value.slice(0, value.length)}</span>
              <span className="blink">&ensp;</span>
            </>
          )}
        </>
      ) : (
        <>
          <PastLine value={value} />
        </>
      )}
    </div>
  )
}

export default Line
