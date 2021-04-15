
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Homepage from './container/homepage'
import CardReducer from './Redux/Reducer/CardReducer'

import './App.css'

const store = createStore(CardReducer,applyMiddleware(thunk))

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