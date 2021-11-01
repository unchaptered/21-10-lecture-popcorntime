import React from "react";
import styled from "styled-components";

const LoaderConainer=styled.div`
    position: fixed;
    padding: 0 10px;

    height: 100vh;
    width:  100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 32px;
`;

export default ()=>(
    <LoaderConainer>
        <span role="img" aria-label="Loading">
            ⚡⚡⚡
        </span>
    </LoaderConainer>
)
