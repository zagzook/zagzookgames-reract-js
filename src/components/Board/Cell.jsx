import PropTypes from 'prop-types'

const Cell = ({ row, col }) => {
  return (
    <div
      onClick={() => {
        console.log(row, col)
      }}
      className="Cell select-none flex items-center cursor-pointer text-white dark:text-white bg-slate-800 dark:bg-slate-500 w-full h-full rounded-sm hover:border-[3px] hover:border-[var(--main-sites-color)] hover:dark:border-[var(--main-sites-color)]
"></div>
  )
}
Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
}

export default Cell
