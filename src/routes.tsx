import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/default'
import { Status } from './pages/status'
import { Timeline } from './pages/timeline'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/status',
        element: <Status />,
      },
    ],
  },
])
