import Square from './Square'

const Board = () => {
  const pause = false
  const over = true
  const squares = Array(3).fill(Array(3).fill(null))

  return (
    <div className="flex w-screen h-[50vh] md:w-[600px] md:h-[600px] p-2 flex-col gap-2 relative my-5 ">
      {pause && (
        <span className="text-6xl bg-slate-800 dark:bg-slate-500 border shadow-lg border-blck p-10 rounded-xl absolute top-0 left-0 w-full h-full text-center content-center text-white dark:text-white">
          PAUSE
        </span>
      )}
      {over && (
        <span className="text-6xl bg-slate-800 dark:bg-slate-500 border shadow-lg border-blck p-10 rounded-xl absolute top-0 left-0 w-full h-full text-center content-center text-white dark:text-white">
          over
        </span>
      )}
      {squares.map((iRow, rowIndex) => (
        <div key={rowIndex} className="flex gap-3 w-full h-full">
          {iRow.map((iCol, colIndex) => (
            <Square key={colIndex} row={rowIndex} col={colIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
