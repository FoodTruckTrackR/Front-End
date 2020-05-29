import React, { useState } from 'react';
import AddMenuComp from './Add_menu';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    border: 2px solid #51240f;
    border-radius: 20%;
    padding: 3%;
    width: 50%;
    height: 40vh;
    margin: 3% 3% 3% 20%;
    color: #51240f;
    background-color: rgba(222, 100, 89, 0.8);
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
    margin-right: 8%;
`

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

    const truckSubmit = event => {
        event.preventDefault();
        setTruckState({
        truckName: '',
        cuisineType: '',
        customerRatings: [],
        customerRatingAvg: '',
        menu: []
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
        <StyledDiv>
            <StyledForm onSubmit={truckSubmit}>
                <h5>Add a Truck</h5>
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
                <Link to='/menu'>Add an item to your truck menu here!</Link>
                <Route path='/menu' render={(props) => <AddMenuComp {...props} menuChange={menuChange} menuSubmit={menuSubmit} itemName={menuItem.itemName} itemDescription={menuItem.itemDescription} itemPrice={menuItem.itemDescription} />} />
            </StyledForm>
        </StyledDiv>
    )
}

export default AddTruckComp;
