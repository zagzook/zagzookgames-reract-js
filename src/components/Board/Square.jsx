import Cell from './Cell'
import PropTypes from 'prop-types'

const Square = ({ row, col }) => {
  const cells = Array(3).fill(Array(3).fill(null))
  return (
    <div className="box w-full h-full grid grid-col-3 border border-slate-900">
      {cells.map((iRrow, rowIndex) => (
        <div key={rowIndex} className="flex w-full h-full">
          {iRrow.map((iCol, colIndex) => (
            <Cell
              key={colIndex}
              row={row * 3 + rowIndex}
              col={col * 3 + colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
Square.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
}

export default Square
