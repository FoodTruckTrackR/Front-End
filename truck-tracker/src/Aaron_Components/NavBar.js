import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: #51240f;
    color: rgb(254, 104, 0, 0.8);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-around;
`

const StyleAnch = styled.a`
    margin-right: 2%;
`

const NavComp = () => {

    const loggedIn = () =>{
        if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
            return;
        }else{
            return(
            <StyleAnch>Sign out</StyleAnch>
            )
        }
    }
    return(
        <NavStyle>
            <StyleAnch>Home</StyleAnch>
            <StyleAnch>About</StyleAnch>
            <StyleAnch>Profile</StyleAnch>
            {loggedIn()}
        </NavStyle>
    )
}

export default NavComp;