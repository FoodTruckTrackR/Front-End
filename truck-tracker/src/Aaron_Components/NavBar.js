import React from 'react';
import styled from 'styled-components';

const NavStyle = styled.nav`
    background-color: #51240f;
    color: rgb(255, 213, 0, 0.8);
`

const NavComp = () => {
    return(
        <NavStyle>
            <a>Home</a>
            <a>About</a>
            <a>Profile</a>
            <a>Sign out</a>
        </NavStyle>
    )
}

export default NavComp;