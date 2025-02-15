import Board from '../Board/Board'
import { Button } from '../ui/button'

const Game = () => {
  return (
    <div className="flex flex-col items-center my-5 gap-2">
      <div id="heading" className="text-3xl font-bold mb-5">
        Zagzook Games Sudoku
      </div>
      <Board />
      <div className="flex items-center w-full justify-around gap-2">
        <Button className="game-info-btn active:scale-90">
          <i className="bx bx-log-out bx-rotate-180 bx-md"></i>
        </Button>
        <Button className="game-info-btn active:scale-90">
          <i className="bx bx-pause bx-md"></i>
        </Button>
        <Button className="game-info-btn active:scale-90">
          <i className="bx bx-rotate-left bx-md"></i>
        </Button>
        <Button className="game-info-btn active:scale-90">
          <i className="bx bx-edit-alt bx-md"></i>
        </Button>
        <Button className="game-info-btn active:scale-90">
          <i className="bx bx-bulb bx-md"></i>
        </Button>
      </div>
    </div>
  )
}

export default Game
