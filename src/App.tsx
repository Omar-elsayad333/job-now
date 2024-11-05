import './App.css'
import { Suspense } from 'react'
import { router } from './routes'
import store from './app/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Suspense fallback={<div>loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </div>
  )
}

export default App
