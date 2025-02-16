import { createRoot } from 'react-dom/client'
import { Game, Home } from './lib/index.js'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'

import App from './App.jsx'

import './index.css'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="game" element={<Game />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
