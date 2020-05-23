import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: #51240f;
    color: rgb(255, 213, 0, 0.8);
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
    return(
        <NavStyle>
            <StyleAnch>Home</StyleAnch>
            <StyleAnch>About</StyleAnch>
            <StyleAnch>Profile</StyleAnch>
            <StyleAnch>Sign out</StyleAnch>
        </NavStyle>
    )
}

export default NavComp;