import { CONSTANT } from '@/lib/constants'

export function generateRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) {
      return false
    }
  }

  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) {
      return false
    }
  }

  const iRow = Math.floor(row / 3) * 3 //if row = 5 (5/3 = int:1 * 3 = 3), iRow = 3
  const iCol = Math.floor(col / 3) * 3
  //   console.log(iRow,iCol)
  for (let x = iRow; x < iRow + 3; x++) {
    for (let y = iCol; y < iCol + 3; y++) {
      if (board[x][y] == num) return false
    }
  }
  return true
}

export function genrateSuduko(board, randomArray) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == 0) {
        for (const num of randomArray) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num
            if (genrateSuduko(board, randomArray)) {
              return true
            }
            board[row][col] = 0
          }
        }
        return false
      }
    }
  }
  console.log('solution', board)
  return true
}

function removeCell(board, num) {
  if (num > board.length * board[0].length) {
    console.warn('Number of cells to remove exceeds board size.')
    num = board.length * board[0].length // Or handle it differently
  }
  let cellsRemoved = 0 // Keep track of removed cells to avoid infinite loop

  while (cellsRemoved < num) {
    const row = generateRandom(1, 9) - 1
    const col = generateRandom(1, 9) - 1

    if (board[row][col] !== 0) {
      // Only remove if cell is not already empty
      board[row][col] = 0
      cellsRemoved++
    }
  }
}

export function sudoku(mode) {
  const no_of_cell = generateRandom(
    CONSTANT.MODES[mode].value[0],
    CONSTANT.MODES[mode].value[1]
  )
  const solvedBoard = Array.from({ length: 9 }, () => Array(9).fill(0))
  const randomArray = []
  // eslint-disable-next-line no-constant-condition
  while (1) {
    if (randomArray.length == 9) break
    const num = generateRandom(1, 9)
    if (!randomArray.includes(num)) randomArray.push(num)
  }
  genrateSuduko(solvedBoard, randomArray)
  let unSolvedBoard = solvedBoard.map((row) => row.map((num) => num))
  removeCell(unSolvedBoard, no_of_cell)
  console.log('unSolvedBoard', unSolvedBoard)
  unSolvedBoard = unSolvedBoard.map((row) => {
    return row.map((num) => {
      if (num) {
        return { value: num, default: true, pencilValue: 0 }
      }
      return { value: num, default: false, pencilValue: 0 }
    })
  })
  return { solvedBoard, unSolvedBoard }
}
