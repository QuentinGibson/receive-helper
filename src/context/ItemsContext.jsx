import React, { createContext, useState } from 'react';
import {chromeCollectItems, chromeMoveItem, chromeNewTab} from './chrome'
import PropTypes from 'prop-types';

export const Context = createContext({})

export const Provider = (props) => {
    const {
        items: initialItems,
        palletOrder: initialPalletOrder,
        locationFilter: initialLocationFilter,
        tab: initialTab,
        locations: initialLocations,
        children
    } = props

    const [items, setItems] = useState(initialItems)
    const [tab, setTab] = useState(initialTab)
    const [palletOrder, setPalletOrder] = useState(initialPalletOrder)
    const [locations, setLocations] = useState(initialLocations)
    const [locationFilter, setLocationFilter] = useState(initialLocationFilter)

    const collectItems = async () => {
        await newTab().then(async () => {
            const items = await chromeCollectItems(palletOrder, tab) 
            setItems(items)
        })
    }

    const creditItem = async item => {
        const items = await chromeMoveItem(item, tab)
        setItems(items)
    }

    const newTab = async () => {
        const currentTab = await chromeNewTab()
        setTab(currentTab.id)
        console.log(`Tab: ${tab}`)
    }

    const removeItem = item => {
        const newItems = items.filter(currentItem => currentItem.asin !== item.asin)
        setItems(newItems)
    }

    const itemsContext = {
        items,
        setItems,
        palletOrder,
        setPalletOrder,
        locations,
        setLocations,
        locationFilter,
        tab,
        setTab,
        setLocationFilter,
        collectItems,
        creditItem,
        chromeMoveItem,
        removeItem
    }

    return <Context.Provider value={itemsContext}>{children}</Context.Provider>
}

export const { Consumer } = Context;

Provider.propTypes = {
    items: PropTypes.array,
    palletOrder: PropTypes.string,
    tab: PropTypes.number,
    locations: PropTypes.object,
    locationFilter: PropTypes.string
}

Provider.defaultProps = {
    items: [],
    palletOrder: '',
}