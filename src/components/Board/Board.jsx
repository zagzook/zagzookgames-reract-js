import Square from './Square'
import { Button } from '../ui/button'

import useGameStore from '@/stores/GameStore/GameStore'
import { useEffect, useRef } from 'react'
import InfoBarTop from '../InfoBar/InfoBarTop'
import Keyboard from '../Keyboard/Keyboard'
import InfoBarBottom from '../InfoBar/InfoBarBottom'

const Board = () => {
  const {
    isPause,
    unSelectCells,
    isComplete,
    tryAgain,
    startGame,
    mistakes,
    totalMistakesTaken,
    level,
  } = useGameStore()
  const squares = Array(3).fill(Array(3).fill(null))
  const boardRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!boardRef.current.contains(event.target)) {
        unSelectCells() // Unselect when clicking outside
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div>
      <div
        ref={boardRef}
        className=" boardScreen p-2 flex flex-col  relative my-5">
        <InfoBarTop />

        {isPause && <span className="game-popup-screen">PAUSE</span>}
        {isComplete && (
          <div className="game-popup-screen">
            <span>GAME OVER</span>
            <br />
            {mistakes >= totalMistakesTaken ? (
              <span className="text-3xl">All Mistakes Used</span>
            ) : (
              <span className="text-3xl">You Won</span>
            )}
            <div className="flex items-center p-5 justify-around gap-2">
              {mistakes >= totalMistakesTaken && (
                <Button
                  onClick={() => {
                    tryAgain()
                  }}
                  className="game-over-btn btn">
                  Restart
                </Button>
              )}
              <Button
                onClick={() => {
                  startGame(level)
                }}
                className="game-over-btn btn">
                New Game
              </Button>
            </div>
          </div>
        )}
        {squares.map((iRow, rowIndex) => (
          <div key={rowIndex} className="flex w-full h-full ">
            {iRow.map((iCol, colIndex) => (
              <Square key={colIndex} row={rowIndex} col={colIndex} />
            ))}
          </div>
        ))}
        <Keyboard />
        <InfoBarBottom />
      </div>
    </div>
  )
}

export default Board
