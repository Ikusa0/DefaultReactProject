import { makeDefaultPage } from '@/main/factories/pages'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: makeDefaultPage({})
  }
])

export default Router
