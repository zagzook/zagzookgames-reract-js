import { useNavigate } from 'react-router-dom'
import Board from '../Board/Board'
import useGameStore from '@/stores/GameStore/GameStore'
import { useEffect, useRef } from 'react'

const Game = () => {
  const navagate = useNavigate()
  const timeRef = useRef()
  const { increaseTime, isStart, isPause, isCompleted } = useGameStore()

  useEffect(() => {
    if (!isStart) {
      navagate('/')
    }

    timeRef.current = setInterval(() => {
      if (!isPause && !isCompleted) increaseTime()
    }, 1000)
    return () => {
      clearInterval(timeRef.current)
    }
  }, [isPause, isCompleted, isStart, increaseTime, navagate])

  return (
    <div className="flex flex-col items-center my-2 gap-2 z-10">
      <Board />
    </div>
  )
}

export default Game
