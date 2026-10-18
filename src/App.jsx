import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import router from './router/router'

function App() {
  
  localStorage.getItem('navcart') || localStorage.setItem('navcart', JSON.stringify([]))

  return (
    <div className='min-h-screen flex flex-col'>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  )
}

export default App
