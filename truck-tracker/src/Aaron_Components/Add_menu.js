import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    border: 2px solid #51240f;
    border-radius: 20%;
    padding: 3%;
    width: 100%;
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

const AddMenuComp = (props) => {
    return(
    <StyledDiv>
        <StyledForm onSubmit={props.menuSubmit}>
        <h5>Add a menu item</h5>
        <label>
            Menu item 
            <input
            type='text'
            name='itemName'
            id='itemName'
            value={props.itemName}
            onChange={props.menuChange}
            />
        </label>
        <label>
            Dish description 
            <input
            type='text'
            name='itemDescription'
            id='itemDescription'
            value={props.itemDescription}
            onChange={props.menuChange}
            />
        </label>
        <label>
            Item price 
            <input
            type='text'
            name='itemPrice'
            id='itemPrice'
            value={props.itemPrice}
            onChange={props.menuChange}
            />
        </label>
        <button type='submit'>Submit item</button>
    </StyledForm>
    </StyledDiv>
    )
}

export default AddMenuComp;