import { DotIcon } from 'lucide-react'
import { Button } from '../ui/button'
import useGameStore from '@/stores/GameStore/GameStore'

const InfoBarBottom = () => {
  const {
    totalMistakesTaken,
    mistakes,
    pencilMode,
    togglePencilMode,
    useHint,
    hints,
    resetBoard,
    deleteNumber,
  } = useGameStore()
  return (
    <div className="flex items-center w-full justify-around gap-2 bg-[#bc3c3c] p-2 md:px-2">
      <div className="text-white lg:text-2xl md:text-xl sm:text-lg relative h-[50px] flex items-center pb-5 md:px-3">
        {mistakes}/{totalMistakesTaken}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm  ">
          MISTAKES
        </span>
      </div>
      <DotIcon className=" text-white" />
      <Button
        onClick={() => deleteNumber()}
        variant="siteButton"
        className=" text-white lg:text-2xl md:text-xl sm:text-lg relative">
        <i className="bx bxs-eraser bx-md pb-5"></i>
        <span className="text-sm text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
          ERASE
        </span>
      </Button>

      <DotIcon className=" text-white" />
      <Button
        onClick={() => resetBoard()}
        variant="siteButton"
        className=" text-white lg:text-2xl md:text-xl sm:text-lg relative">
        <i className="bx bx-rotate-left bx-md pb-5"></i>
        <span className="text-sm text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
          RESET
        </span>
      </Button>
      <DotIcon className=" text-white" />
      <Button
        onClick={() => togglePencilMode()}
        variant="siteButton"
        className={` text-white lg:text-2xl md:text-xl sm:text-lg relative `}>
        {pencilMode ? (
          <>
            <span className="absolute h-5 w-5 right-1 -top-3 flex items-center justify-center text-center text-[12px] bg-green-700 text-white p-2 rounded-full">
              ON
            </span>
            <i className="bx bx-edit-alt bx-md pb-5"></i>
            <span className="text-sm text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
              NOTES
            </span>
          </>
        ) : (
          <>
            <span className="absolute h-5 w-5 right-1 -top-3 flex items-center justify-center text-center text-[12px] bg-red-700 text-white p-2 rounded-full">
              OFF
            </span>
            <i className="bx bx-edit-alt bx-md pb-5"></i>
            <span className="text-sm text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
              NOTES
            </span>
          </>
        )}
      </Button>
      <DotIcon className=" text-white" />
      <Button
        // eslint-disable-next-line react-hooks/rules-of-hooks
        onClick={() => useHint()}
        variant="siteButton"
        className=" text-white lg:text-2xl md:text-xl sm:text-lg relative">
        <span className="absolute h-6 w-6 right-1 -top-3 flex items-center justify-center text-center text-[12px] bg-blue-700 text-white p-2 rounded-full">
          {hints}
        </span>
        <i className="bx bx-bulb bx-md pb-5"></i>
        <span className="text-sm text-white absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
          HINTS
        </span>
      </Button>
    </div>
  )
}

export default InfoBarBottom
