import { Button } from '../ui/button'
import { DotIcon } from 'lucide-react'
import useGameStore from '@/stores/GameStore/GameStore'

const InfoBarTop = () => {
  const { isPause, level, time, pauseGame, quitGame } = useGameStore()

  function formateTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor(seconds % 60)
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${
      s < 10 ? '0' + s : s
    }`
  }

  return (
    <div className="flex items-center w-full justify-around gap-2 bg-[#bc3c3c] p-2 mb-2">
      <Button
        onClick={() => {
          quitGame()
        }}
        variant="siteButton"
        className="text-white lg:text-2xl md:text-xl sm:text-lg h-[50px] flex items-center">
        Home
      </Button>
      <DotIcon className=" text-white" />
      <div className="text-white lg:text-2xl md:text-xl sm:text-lg h-[50px] flex items-center capitalize">
        {level}
      </div>
      <DotIcon className=" text-white" />
      <div className="text-white lg:text-2xl md:text-xl sm:text-lg h-[50px] flex items-center">
        {formateTime(time)}
      </div>
      <DotIcon className=" text-white" />
      <Button
        onClick={() => pauseGame()}
        variant="siteButton"
        className="text-white lg:text-2xl md:text-xl sm:text-lg h-[50px] flex items-center">
        {!isPause ? 'Pause' : 'Resume'}
      </Button>
    </div>
  )
}

export default InfoBarTop
