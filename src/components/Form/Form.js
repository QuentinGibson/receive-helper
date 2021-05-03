import React from 'react'

export default function Form({setPalletOrder, setPalletID, handleSubmit}) {
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pallet Order Number: <br/>
                    <input type="text" name="palletOrder" onChange={(e) => setPalletOrder(e.target.value)}/>
                </label>
                <label>
                    Pallet ID: <br/>
                    <input type="text" name="palletID" onChange={(e) => setPalletID(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}