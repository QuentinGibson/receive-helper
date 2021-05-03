import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import List from './components/List'
import Form from './components/Form'
import Footer from './components/Footer/Footer'
import aftlite from './utils/aftlite.js'
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

  useEffect(() => {
    if (palletOrder !== '' && palletID !== '') {
      const items = aftlite.getPO(palletOrder, palletID)
      setItems(items)
    }
  }, [palletOrder, palletID])

    if (items.length === 0) {
      return (
        <Form
          setPalletOrder={setPalletOrder}
          setPalletID={setPalletID}
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
