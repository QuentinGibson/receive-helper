import React from 'react';

export default function List({items}) {
    const itemElements = items.map(item => {
        return (
            <li>
                <span>{item.asin}</span><br/>
                <span>{item.location}</span><br/>
                <button value="Move" onClick={}/><br/>
                <button value="Cancel" onClick={}/>
            </li>
        )
    })
    return (
        <ul>
            {itemElements}
        </ul>
    )
}