import React from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import CardReducer from './reducer/CardReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(CardReducer)

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Homepage />
      </div>
    </Provider>
  )
}

export default App
