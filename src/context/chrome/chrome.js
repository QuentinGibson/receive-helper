/*global chrome*/
import {getItems, getLocations, moveItem} from './utils'

export const chromeNewTab = (setTab) => {
    setTab(chrome.tabs.create({ active: true }))
}

export const chromeCollectItems = (palletOrder, setItems, tab) => {
    const url = `https://aftlite-portal.amazon.com/dock_receive/reconcile_shorts_overages?po=${palletOrder}`
    chrome.tabs.update(tab.id, url)
    chrome.scripting.executeScript({
        target: tabs.id,
        function: getItems(setItems)
    })
}

export const chromeCollectLocations = (palletOrder, setLocations) => {
    const url = `https://aftlite-portal.amazon.com/dock_receive/pallets?receivable_order_id=${palletOrder}`
    chrome.tabs.update(tab.id, url)
    chrome.scripting.executeScript({
        target: tabs.id,
        function: getLocations(setLocations)
    })
}

export const moveItem = item => {
    const url = `https://aftlite-portal.amazon.com/receive-by-pallet`
    chrome.tabs.update(tab.id, url)
    chrome.scripting.executeScript({
        target: tab.id,
        function: moveItem(item, setItems)
    })
}