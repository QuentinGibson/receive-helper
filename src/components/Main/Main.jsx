import React, { useContext } from "react";
import { Form } from '../Form'
import { List } from '../List'
import { ItemsContext } from '../../context'

export const Main = () => {
    const itemsContext = useContext(ItemsContext)
    const { items } = itemsContext
    if (items.length === 0) {
        return <Form/>
    } else {
        return <List/>
    }
}