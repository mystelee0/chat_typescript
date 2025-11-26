import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useEffect } from 'react'
import { useAppSelector } from './store/hooks'

function App() {

  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>

    </>
  )
}

export default App;