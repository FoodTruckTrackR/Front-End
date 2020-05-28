import React, { useState } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {actionLogin} from './Action'
import axios from 'axios';

const StyledDiv = styled.div`
    display: flex;
    border: 2px solid #51240f;
    border-radius: 20%;
    padding: 3%;
    width: 80%;
    height: 40vh;
    margin: 3% 3% 3% 10%;
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

const AddTruckComp = (props) => {
    console.log("These", props)
    const [truckState, setTruckState] = useState({
        truckImage: '',
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
        axios
        .post(`https://foodtruck-trackr.herokuapp.com/${props.id}/trucks`, truckState)
        setTruckState({
        truckImage: '',
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
                    What is the truck image URL?
                    <input
                    name='truckImage'
                    type='text'
                    id='truckImage'
                    value={truckState.truckImage}
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
            </StyledForm>
            <hr />
            <StyledForm onSubmit={menuSubmit}>
                <h5>Add a menu item</h5>
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
            </StyledForm>
        </StyledDiv>
    )
}
const mapStateToProps = state =>{
    console.log("This", state)
    return{
        error: state.error,
        id: state.id,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {actionLogin})(AddTruckComp);