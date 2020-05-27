import React, { useState } from 'react';

const AddTruckComp = () => {
    const [truckState, setTruckState] = useState({
        truckName: '',
        cuisineType: '',
        customerRatings: [],
        customerRatingAvg: '',
        menu: []
    })

    const [menuItem, setMenuItem] = useState({
        itemName: '',
        itemDescription: '',
        itemPhotos: [],
        itemPrice: '',
        customerRatings: [],
        customerRatingAvg: ''
    })

    const truckChange = event => {
        setTruckState({
            ...truckState,
            [event.target.name]: event.target.value
        })
    }

    const menuChange = event => {
        setMenuItem({
            ...menuItem,
            [event.target.name]: event.target.value
        })
    }

    const menuSubmit = event => {
        event.preventDefault();
        setTruckState(truckState.menu.push(menuItem));
        console.log(menuItem);
        setMenuItem({
        itemName: '',
        itemDescription: '',
        itemPhotos: [],
        itemPrice: '',
        customerRatings: [],
        customerRatingAvg: ''
        })
        console.log(truckState)
    }

    return(
        <div>
            <form>
            <label>
                What's the name of the truck? 
                <input
                name='truckName'
                type='text'
                id='truckName'
                value={truckState.truckName}
                onChange={truckChange}
                />
            </label>
            <label>
                What cuisine do you serve? 
                <input
                name='cuisineType'
                type='text'
                id='cuisineType'
                value={truckState.cuisineType}
                onChange={truckChange}
                />
            </label>
            <button type='submit'>Submit truck</button>
        </form>
            <form onSubmit={menuSubmit}>
                <label>
                    Menu item 
                    <input
                    type='text'
                    name='itemName'
                    id='itemName'
                    value={menuItem.itemName}
                    onChange={menuChange}
                    />
                </label>
                <label>
                    Dish description 
                    <input
                    type='text'
                    name='itemDescription'
                    id='itemDescription'
                    value={menuItem.itemDescription}
                    onChange={menuChange}
                    />
                </label>
                <label>
                    Item price 
                    <input
                    type='text'
                    name='itemPrice'
                    id='itemPrice'
                    value={menuItem.itemPrice}
                    onChange={menuChange}
                    />
                </label>
                <button type='submit'>Submit item</button>
            </form>
        </div>
    )
}

export default AddTruckComp;