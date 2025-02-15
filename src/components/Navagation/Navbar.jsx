import { Moon, SunMedium } from 'lucide-react'
import useDarkModeStore from '@/stores/Darkmode/darkmode'
import { useEffect } from 'react'

const Navbar = () => {
  const setTheme = useDarkModeStore((state) => state.setTheme)
  const theme = useDarkModeStore((state) => state.theme)
  console.log('theme', theme)

  const setThemeMode = () => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  useEffect(() => {
    setThemeMode()
  })

  const currentDate = new Date()

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <nav className="max-w-[960px] mx-auto sticky top-[5px]  p-4 z-50">
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

            {/* Dark Mode Toggle (Hidden on Smaller Screens) */}
            <div className="relative dark-mode-icon hidden sm:block">
              <button
                onClick={toggleTheme}
                className="transition-opacity duration-300">
                <span
                  className={`${
                    theme === 'light' ? 'opacity-100' : 'opacity-0'
                  } absolute inset-0`}>
                  <Moon size={24} />
                </span>
                <span
                  className={`${
                    theme === 'dark' ? 'opacity-100' : 'opacity-0'
                  } absolute inset-0`}>
                  <SunMedium size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
