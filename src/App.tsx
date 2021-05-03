import React, { useEffect, useState } from 'react';
import List from './components/List/List'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
// import aftlite from './utils/aftlite.js'
import './App.css';

type item = {
  asin: string;
  location: string;
}

function App() {
  const [palletOrder, setPalletOrder] = useState('')
  const [palletID, setPalletID] = useState('')
  let itemsDefault: Array<item> = []
  const [items, setItems] = useState(itemsDefault)

  function handleSubmit() {
    // setItems(aftlite.getPO(palletOrder, palletID))
  }

    if (items.length === 0) {
      return (
        <Form
          setPalletOrder={setPalletOrder}
          setPalletID={setPalletID}
          handleSubmit={handleSubmit}
        />
      )
    } else {
      return (
        <div>
          <List
            items={items}
          />
          <Footer/>
        </div>
      )
    }
}

export default App;
