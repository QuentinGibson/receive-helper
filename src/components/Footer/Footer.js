import React, { useContext } from 'react'
import { ItemsContext } from '../../context'
export function Footer() {
    const itemsContext = useContext(ItemsContext)
    const { setItems } = itemsContext
    return (
       <div>
           <input type="button" value="Reset" onClick={() => setItems([])}></input>
       </div>
    )
}