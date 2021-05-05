import React, { useContext } from 'react'
import { Footer } from '../Footer'
import { ItemsContext } from '../../context'

export function List() {
    const itemsContext = useContext(ItemsContext)
    const { items, moveItem, removeItem} = itemsContext
    const itemElements = items.map(item => {
        return (
            <li key={item.asin}>
                <span>{item.asin}</span><br/>
                <span>{item.location}</span><br/>
                <input type="button" value="Move" onClick={moveItem(item.asin)}/><br/>
                <input type="button" value="Remove" onClick={removeItem(item.asin)}/>
            </li>
        )
    })
    return (
        <div className="list">
            <ul>
                {itemElements}
            </ul>
            <Footer/>
        </div>
    )
}