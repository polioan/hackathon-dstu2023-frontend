import '../src/styles/normalize.scss'
import '../src/styles/global.scss'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
