import useGameStore from '@/stores/GameStore/GameStore'
import PropTypes from 'prop-types'

const Cell = ({ row, col }) => {
  const {
    solution,
    board,
    setSelectedCell,
    selectedCell,
    isPause,
    isComplete,
  } = useGameStore()

  function handleClick() {
    if (isPause || isComplete) return
    setSelectedCell(row, col)
  }

  function isSelected() {
    const query = { current: false, other: false, single: false }

    if (
      selectedCell.row == null ||
      selectedCell.col == null ||
      selectedCell.squares == null
    ) {
      return query
    }

    for (const sq of selectedCell.squares) {
      if (sq[0] == row && sq[1] == col) {
        query.other = true
      }
    }

    if (selectedCell.row === row && selectedCell.col === col) {
      query.current = true
    }
    if (selectedCell.row === row || selectedCell.col === col) {
      query.other = true
    }
    if (
      board[row][col]?.value != 0 &&
      board[row][col]?.value == board[selectedCell.row][selectedCell.col]?.value
    ) {
      query.single = true
    }
    return query
  }

  return (
    <div
      onClick={handleClick}
      className={`Cell cell-items relative
      ${
        isSelected().other
          ? 'bg-sky-300  border-[3px] border-[#bc3c3c] font-bold '
          : ''
      }
      ${
        isSelected().single
          ? 'bg-sky-600  border-[3px] border-[#bc3c3c] font-bold '
          : ''
      }
    ${
      isSelected().current
        ? 'bg-sky-950  border-[3px] border-[#bc3c3c] font-bold text-white'
        : ''
    }
    `}>
      {board[row][col]?.value != 0 && (
        <span
          className={`lg:text-[50px] md:text-[30px] sm:text-[20px] text-center 
          ${
            board[row][col]?.default
              ? 'text-[#09090b]'
              : board[row][col]?.value === solution[row][col]
              ? 'text-green-600 '
              : 'text-[#bc3c3c] border-[4px] md:border-[2px] border-[#bc3c3c] px-2  md:text-sm rounded-md cell-err '
          }
          ${isSelected().current && 'text-white'}
          `}>
          {board[row][col]?.value}
        </span>
      )}
      {board[row][col]?.pencilValue !== 0 && !board[row][col]?.default && (
        <span className="text-base md:text-2xl absolute -top-1 right-1 text-green-600">
          {board[row][col]?.pencilValue}
        </span>
      )}
    </div>
  )
}
Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
}

export default Cell
