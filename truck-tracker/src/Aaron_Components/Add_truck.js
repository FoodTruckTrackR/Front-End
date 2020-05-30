import React, { useState } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {actionLogin} from './Action'
import axiosWithAuth from './axiosWithAuth';

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
        truckName: '',
        imageOfTruck: '',
        cuisineType: '',
    })

    const [menuItem, setMenuItem] = useState({
        itemName: '',
        itemDescription: '',
        itemPhotos: [],
        itemPrice: '',
        ratings: [],
        ratingAvg: ''
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
        axiosWithAuth()
        .post(`https://foodtruck-trackr.herokuapp.com/operators/${props.id}/trucks`, truckState)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        setTruckState({
        truckName: '',
        imageOfTruck: '',
        cuisineType: ''
        })
    }

    const menuSubmit = event => {
        event.preventDefault();
        setTruckState(truckState.menu.push(menuItem));
        console.log(menuItem);
        setMenuItem({
        itemName: '',
        itemDescription: '',
        itemPhoto: '',
        itemPrice: '',
        customerRatings: [],
        customerRatingAvg: ''
        })
        console.log(truckState)
    }

    return(
        <StyledDiv>
            <StyledForm>
                <h5>Add a Truck</h5>
                <label>
                    What is the truck name?
                    <input
                    name='truckName'
                    type='text'
                    id='truckName'
                    value={truckState.truckName}
                    onChange={truckChange}
                    />
                </label>
                <label>
                    What is the truck image URL?
                    <input
                    name='imageOfTruck'
                    type='text'
                    id='imageOfTruck'
                    value={truckState.imageOfTruck}
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
                <button onClick={truckSubmit}>Submit truck</button>
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
    return{
        error: state.error,
        id: state.id,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {actionLogin})(AddTruckComp);