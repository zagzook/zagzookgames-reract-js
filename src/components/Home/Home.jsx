import { useNavigate } from 'react-router'
import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useGameStore from '@/stores/GameStore/GameStore'

const Home = () => {
  const { setKeyBoard, levelItems, level, setLevel, startGame, continueGame } =
    useGameStore()

  const navagate = useNavigate()

  const handleStartGame = () => {
    if (level === null || level === undefined) {
      document.getElementById('Error')?.classList.remove('hidden')
      document.getElementById('Error')?.classList.add('flex')
      setInterval(() => {
        document.getElementById('Error')?.classList.add('hidden')
      }, 3000)
      return
    }

    startGame(level)
    setKeyBoard(0)
    navagate('/game')
  }

  function handleContinue() {
    continueGame()
    navagate('/game')
  }

  return (
    <div className="mt-10">
      <div>
        <span
          id="Error"
          className="text-3xl text-red-700 hidden  justify-center">
          Please select a level
        </span>
      </div>
      <div id="heading" className="text-3xl font-bold mb-5">
        Zagzook Games Sudoku
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Select
          id="mode"
          value={level}
          onValueChange={(value) => {
            setLevel(value)
          }}
          className="w-72">
          <SelectTrigger className="btn bg-[var(--main-sites-color)] text-white text-center">
            <SelectValue placeholder="Select a Level" />
          </SelectTrigger>
          <SelectContent>
            {levelItems.map(({ levelItem, label }) => (
              <SelectItem key={levelItem} value={levelItem}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={handleStartGame}
          variant="outline"
          className="outline-2 outline-[var(--main-sites-color)] text-[var(--main-sites-color)] btn">
          Start Game
        </Button>
        <Button
          onClick={handleContinue}
          variant="outline"
          className="outline-2 outline-[var(--main-sites-color)] text-[var(--main-sites-color)] btn">
          Continue Game
        </Button>
      </div>
    </div>
  )
}

export default Home
