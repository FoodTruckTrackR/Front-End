import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

    const signOut = () =>{
        localStorage.clear();
    }
    const loggedIn = () =>{
        if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
            return;
        }else{
            return(
            <div onClick={signOut}>Sign out</div>
            )
        }
    } 

    const loggedInAsOperator = () =>{
        if(localStorage.getItem("trucks") === null || localStorage.getItem("trucks") === undefined){
            return;
        }else{
            return(
                <Link path to='/operator/profile'>Profile</Link>
            )
        }
    }

    return(
        <NavStyle>
            <StyleAnch><Link path to="/">Log in</Link></StyleAnch>
            <StyleAnch>About</StyleAnch>
            {loggedIn()}
            {loggedInAsOperator()}
        </NavStyle>
    )
}

export default NavComp;