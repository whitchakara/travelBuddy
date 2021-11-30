import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height:60px;
`;

const Nav = styled.div `
padding: 10px;
display:flex;
align-items:center;
background-color:white;
justify-content:space-evenly;

`;
const Logout = styled.a `
    background-color:white;
    text-decoration:none;
    color:black;
    cursor:pointer;
`;
const Profile = styled.a `
background-color:white;
text-decoration:none;
color:black;
cursor:pointer;
`;
const CreateButton = styled.a `
background-color:white;
text-decoration:none;
color:black;
cursor:pointer;
`;


function Navbar() {
    return (
        <Container>
            <Nav>
                <Logout>logoff</Logout>
                <Profile>profile</Profile>
                <CreateButton>create a trip</CreateButton>
            </Nav>
            
        </Container>
    )
}

export default Navbar
