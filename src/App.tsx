import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useEffect } from 'react'
import { useAppSelector } from './store/hooks'
import styled from 'styled-components'

function App() {

  return (
    <AppContainer>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  position: relative;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  height:100dvh;
  width:100%;
  max-width: 600px;
  margin: 0 auto;
  padding:0;
  font-family: 'Arial', sans-serif;
  background:#fff;

  border:2px solid black;
`

export default App;