import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import Generator from './pages/Generator'
import ThemeGallery from './pages/ThemeGallery'
import Export from './pages/Export'

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/generator', element: <Generator /> },
  { path: '/themes', element: <ThemeGallery /> },
  { path: '/export', element: <Export /> },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
