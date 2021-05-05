export const getItems = setItems => () => {
    const tables = document.querySelectorAll('table')
    const unpackingTable = () => {
        let maxIndex = 0;
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].querySelectorAll('tr').length > tables[maxIndex].querySelectorAll('tr').length) {
                maxIndex = i
            } 
            return tables[maxIndex]
        }
    }

    const itemRows = unpackingTable.querySelectorAll('tr')
    let itemList = []
    const firstItemRow = 1
    for (let i = firstItemRow; i < itemRows.length; i ++) {
        const asin = itemRows[i].firstElementChild.innerText
        const differenceString = itemRows[i].lastElementChild.innerText.replace('-', '')
        const difference = parseInt(differenceString)
        itemList.push({asin, difference})
    }
    setItems(itemList)
}

export const getLocations = setLocations => () => {
    const table = document.querySelector('table')
    const locations = []
    for (let i = 1; i < table.querySelector('tr').length; i++) {
        const row = table[i];
        const palletID = row.querySelector('td').innerText
        const location = document.querySelector('td').nextSibling.innerText
        locations.push({name: location, id: `PA0${palletID}`})
    }
    setLocations(locations)
}