import React, { createContext, useState } from 'react';
import {chromeCollectItems, chromeCreditItem, moveItem, chromeNewTab} from './chrome'
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

    const collectItems = () => {
        setItems(chromeCollectItems(palletOrder, setItems))
    }

    const creditItem = item => {
        chromeCreditItem(item)
    }

    const newTab = () => {
        chromeNewTab(setTab)
    }

    const removeItem = item => {
        const newItems = items.filter(currentItem => currentItem.asin !== item.asin)
        return newItems
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
        moveItem,
        removeItem
    }

    return <Context.Provider value={itemsContext}>{children}</Context.Provider>
}

export const { Consumer } = Context;

Provider.propTypes = {
    items: PropTypes.array,
    palletOrder: PropTypes.string,
    locationFilter: PropTypes.string,
    tab: PropTypes.object
}

Provider.defaultProps = {
    items: [],
    palletOrder: '',
    palletID: '',
    locationFilter: ''
}