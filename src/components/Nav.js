import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav=styled.nav`
    position: fixed;
    top:0;
    left:0;

    width: 100%;
    height: 56px;
    padding: 16px;
    
    display: flex;
    justify-content: space-between;

    background-color: rgba(25,25,25,1);
    box-shadow: 0 2px 10px 2px rgba(45,45,45,0.5);
    div {
        height: 24px;
        display: flex;
        align-items: center;
    }
`;
const ALink=styled(Link)`
    height: 56px;
    font-size:16px;
    font-weight:400;
    
    margin-left: 10px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    border-bottom: 2px solid ${props => props.current ? "#778beb" : "transparent"};
    &:nth-child(1){
        margin-left:15px;
    }

    transition: all 0.2s ease-in;
    &:hover{
        color: whitesmoke;
        opacity: 0.5;
    }
`;
const Input=styled.input`
    margin-left: 20px;
    width: 60vw;
    height: 25px;
    text-align: center;
    transition: all 0.2s ease-in;
    background-color: rgba(25,25,25,1);
    box-shadow: 0 2px 2px 2px rgba(45,45,45,0.5);
    @media screen and (max-width: 1000px) {
        width: 50vw;
    }
    @media screen and (max-width: 500px){
        width: 40vw;
    }
`;
const Button=styled.button`
    height: 30px;
    display: flex;
    align-items: center;

    transition: all 0.2s ease-in;
    &:hover {
        color: whitesmoke;
        opacity: 0.5;
    }
`;
// export default withRouter(props=>());
// export default withRouter(({ location: { pathname } }) => ());
export default withRouter( ({ location: { pathname } }) =>(
    <Nav>
        <div>
            <Button className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </Button>
            {/* You have 2 method... But 2nd method make some warning */}
            {/* ALink current={pathname==="/" ? "text" : null}*/}
            {/* Alink current={pathname==="/"} */}
            <ALink current={pathname==="/" ? "/" : null} to="/">Home</ALink>
            <ALink current={pathname==="/tv" ? "/tv" : null} to="/tv">Tv</ALink>
            <ALink current={pathname==="/search" ? "/search" : null} to="/search">Search</ALink>
            {/* <Input placeholder="red" type="text"/> */}
        </div>
        <div>
            <ALink to="https://github.com/unchaptered?tab=repositories">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            </ALink>
        </div>
    </Nav>
) );