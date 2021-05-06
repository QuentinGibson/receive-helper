/*global chrome*/
import {getItems, getLocations, moveItem} from './utils'

export const chromeNewTab = async () => {
    const tabs = await chrome.tabs.query({ active: true })
    return tabs[0]
}

export const chromeCollectItems = async (palletOrder, setItems, tab) => {
    const url = `https://aftlite-portal.amazon.com/dock_receive/reconcile_shorts_overages?po=${palletOrder}`
    await chrome.tabs.update(tab.id, url).then(() => {
        chrome.scripting.executeScript({
            target: tab.id,
            function: getItems(setItems)
        })
    })
}

export const chromeCollectLocations = async (palletOrder, setLocations, tab) => {
    const url = `https://aftlite-portal.amazon.com/dock_receive/pallets?receivable_order_id=${palletOrder}`
    await chrome.tabs.update(tab.id, url).then(() => {
        chrome.scripting.executeScript({
            target: tab.id,
            function: getLocations(setLocations)
        })
    })
}

export const chromeMoveItem = async (item, setItems, tab) => {
    const url = `https://aftlite-portal.amazon.com/receive-by-pallet`
    await chrome.tabs.update(tab.id, url).then(() => {
        chrome.scripting.executeScript({
            target: tab.id,
            function: moveItem(item, setItems)
        })
    })
}