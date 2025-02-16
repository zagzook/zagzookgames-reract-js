import { CONSTANT } from '@/lib/constants'
import { sudoku } from '@/lib/sudokuUtils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initState = {
  isStart: false,
  isPause: false,
  isComplete: false,
  pencilMode: false,
  mistakes: 0,
  totalMistakesTaken: 0,
  hints: 0,
  time: 0,
  win: false,
  levelIndex: 0,
  levelItems: [
    { levelItem: 'easy', label: 'Easy' },
    { levelItem: 'normal', label: 'Normal' },
    { levelItem: 'hard', label: 'Hard' },
    { levelItem: 'expert', label: 'Expert' },
  ],
  level: CONSTANT.MODES['easy'].key,
  solution: Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0)),
  board: Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0)),
  selectedCell: { row: null, col: null, squares: null },
  keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  keyCount: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
}

const gameState = (set) => ({
  ...initState,
  setLevel: (level) => {
    localStorage.setItem('level', level)
    set({ level })
  },
  startGame: (level) => {
    const data = sudoku(level)
    set({
      ...initState,
      solution: data.solvedBoard,
      board: data.unSolvedBoard,
      level,
      isStart: true,
      hints: CONSTANT.MODES[level].hints,
      totalMistakesTaken: CONSTANT.MODES[level].mistakes,
    })
  }, // Start the game
  tryAgain: () => {
    set((state) => {
      const board = state.board.map((row) =>
        row.map((item) => {
          if (item.default) {
            return item
          }
          return { value: 0, pencilValue: 0, default: false }
        })
      )
      return {
        ...state,
        board,
        mistakes: 0,
        hints: CONSTANT.MODES[state.level].hints,
        isComplete: false,
        isPause: false,
        time: 0,
      }
    })
  }, // Try again
  pauseGame: () => {
    set((state) => ({ ...state, isPause: !state.isPause }))
  }, // Pause the game
  continueGame: () => {
    set((state) => {
      if (localStorage.getItem('game')) {
        const game = JSON.parse(localStorage.getItem('game'))
        return game
      }
      return state
    })
  }, // Continue the game
  togglePencilMode: () => {
    set((state) => ({
      ...state,
      pencilMode: !state.pencilMode,
    }))
  }, // Toggle pencil mode
  changeBoard: (num) => {
    console.log('num', num)
    set((state) => {
      if (state.isPause || state.isComplete) return state
      const row = state.selectedCell.row
      const col = state.selectedCell.col
      const board = state.board
      let mistakes = state.mistakes
      let isComplete = state.isComplete

      if (row == null && col == null) return state
      if (board[row][col].default) return state
      console.log('just before pencilemode')

      if (state.pencilMode) {
        board[row][col] = { ...board[row][col], pencilValue: num }
      } else {
        board[row][col] = { ...board[row][col], value: num }
        if (board[row][col].value !== state.solution[row][col]) {
          mistakes += 1
        }
        if (mistakes >= state.totalMistakesTaken) {
          isComplete = true
        }
        board.forEach((row, rIndx) => {
          row.forEach((cell, cIndx) => {
            if (cell.value !== state.solution[rIndx][cIndx]) {
              state.win = false
            }
          })
        })
      }
      if (state.win) {
        isComplete = true
      }
      return { ...state, board, mistakes, isComplete }
    })
  }, // Change the board
  resetBoard: () => {
    set((state) => {
      if (state.isPause || state.isComplete) return state
      let board = state.board
      board = board.map((row) =>
        row.map((item) => {
          if (item.default) {
            return item
          }
          return { ...item, value: 0, pencilValue: 0 }
        })
      )
      return {
        ...state,
        board,
        mistakes: 0,
        hints: CONSTANT.MODES[state.level].hints,
        time: 0,
        selectedCell: { row: null, col: null, squares: null },
      }
    })
  }, // Reset the board
  quitGame: () => {
    set(initState)
  }, // Quit the game
  setSelectedCell: (row, col) => {
    const iRow = Math.floor(row / 3) * 3
    const iCol = Math.floor(col / 3) * 3
    const squares = []
    for (let x = iRow; x < iRow + 3; x++) {
      for (let y = iCol; y < iCol + 3; y++) {
        squares.push([x, y])
      }
    }

    set({ selectedCell: { row, col, squares } })
  }, // Set the selected cell
  useHint: () => {
    set((state) => {
      const row = state.selectedCell.row
      const col = state.selectedCell.col
      let board = state.board
      if (state.hints <= 0) return state
      if (!row) return state
      if (state.isPause || state.isComplete) return state
      if (board[row][col].default) return state
      board[row][col] = { ...board[row][col], value: state.solution[row][col] }
      return { ...state, board, hints: state.hints - 1 }
    })
  }, // Use hint
  increaseTime: () => {
    set((state) => {
      localStorage.setItem(
        'game',
        JSON.stringify({ ...state, time: state.time + 1 })
      )
      return { ...state, time: state.time + 1 }
    })
  }, // Increase time
  setState: () => {}, // Set the state
  setTheKeyCount: () => {}, // Set the key count
  setKeyBoard: (num) => {
    set((state) => {
      let keyList = state.keyList
      keyList = CONSTANT.KEYLIST[num]
      return { ...state, keyList }
    })
  }, // Set the key board
  unSelectCells: () => {
    set({ selectedCell: { row: null, col: null, squares: null } })
  },
  deleteNumber: () => {
    console.log('deleteNumber')
    set((state) => {
      const row = state.selectedCell.row
      const col = state.selectedCell.col
      const board = state.board
      const num = board[row][col].value
      console.log('row', row)
      console.log('col', col)
      console.log('num', num)
      console.log('keyCount[num]', state.keyCount[num])
      if (state.isPause || state.isCompleted) return state
      board[row][col] = { ...board[row][col], value: 0, mainDigit: false }
      state.keyCount[num] = state.keyCount[num] + 1
      console.log('state.keyCount-after', state.keyCount[num])

      return { ...state, keyCount: state.keyCount }
    })
  },
  keyTotal: (num) => {
    set((state) => {
      if (state.keyCount[num] <= 0) return state
      if (state.isPause || state.isCompleted) return state
      state.keyCount[num] = state.keyCount[num] - 1
      return { ...state, keyCounts: state.keyCount[num] }
    })
  },
})

const useGameStore = create(persist(gameState, { name: 'board' }))

export default useGameStore
