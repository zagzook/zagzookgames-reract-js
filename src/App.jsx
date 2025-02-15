import Navbar from './components/Navagation/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen mx-auto max-w-[960px] flex justify-center">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
