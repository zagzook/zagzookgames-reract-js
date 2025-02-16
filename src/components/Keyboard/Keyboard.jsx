import useGameStore from '@/stores/GameStore/GameStore'

const Keyboard = () => {
  const keyList = useGameStore((state) => state.keyList)
  const changeBoard = useGameStore((state) => state.changeBoard)
  const keys = Array(9).fill(null)

  return (
    <div className="flex justify-around select-none w-full bg-slate-800 my-2 z-10">
      {keys.map((_, index) => (
        <span
          key={index}
          onClick={() => changeBoard(index + 1)}
          className="key text-white bg-slate-800 rounded-md shadow-lg hover:outline-[3px] h-[70px] outline-[#bc3c3c] px-4 pb-4 pt-1 text-3xl cursor-pointer relative">
          {keyList[index]}
          <span className="text-white text-sm absolute bottom-1.5 rounded-full left-1/2 transform -translate-x-1/2 px-[5px] bg-sky-400 ">
            2
          </span>
        </span>
      ))}
    </div>
  )
}

export default Keyboard
