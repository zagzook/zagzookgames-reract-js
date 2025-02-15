import { useNavigate } from 'react-router'
import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const levelItems = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'expert', label: 'Expert' },
]

const Home = () => {
  const navagate = useNavigate()
  return (
    <div className="mt-10">
      <div id="heading" className="text-3xl font-bold mb-5">
        Zagzook Games Sudoku
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Select id="mode" defaultValue="easy" className="w-72">
          <SelectTrigger className="btn bg-[var(--main-sites-color)] text-white dark:text-white text-center">
            <SelectValue placeholder="Select a Level" />
          </SelectTrigger>
          <SelectContent>
            {levelItems.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={() => {
            navagate('/game')
          }}
          variant="outline"
          className="outline-2 outline-[var(--main-sites-color)] text-[var(--main-sites-color)] dark:text-[var(--main-sites-color)] btn">
          Start Game
        </Button>
        <Button
          variant="outline"
          className="outline-2 outline-[var(--main-sites-color)] text-[var(--main-sites-color)] dark:text-[var(--main-sites-color)] btn">
          Continue Game
        </Button>
      </div>
    </div>
  )
}

export default Home
