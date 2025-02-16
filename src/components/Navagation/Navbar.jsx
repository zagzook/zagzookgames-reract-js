import { CONSTANT } from '@/lib/constants'

const Navbar = () => {
  const currentDate = CONSTANT.TODAY_DATE

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <nav className="max-w-[960px] mx-auto top-[5px]  p-4 z-[-10]">
      <div className="flex flex-col">
        <div className=" header-borders  flex items-center justify-center gap-5 py-1">
          <span
            id="heading"
            className="font-bold logo-title-two logo-title uppercase ">
            Zagzook
          </span>
          <span
            id="heading-2"
            className="font-bold logo-title-one logo-title uppercase">
            Games
          </span>
        </div>
        <div className="nav-info-bar">
          <div className="today-date-display w-full flex flex-col sm:flex-row justify-between items-center sm:items-center sm:justify-between">
            <div>Today {formattedDate}</div>
            <div className="sm:ml-4">Edition: 10001000219</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
