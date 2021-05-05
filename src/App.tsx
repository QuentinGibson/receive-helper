import React from 'react';
import {Main} from './components/Main'
import { ItemsContextProvider } from './context'

const App = () => {
  return (
    <div className="app">
      <ItemsContextProvider>
        <Main/>
      </ItemsContextProvider>
    </div>
  )
}

export default App;
