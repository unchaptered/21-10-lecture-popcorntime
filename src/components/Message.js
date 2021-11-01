import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MessageContainer=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const TextDiv=styled.div`
width: 100%;
max-width: 500px;
margin-top: 15px;
padding: 15px;

text-align:center;
font-weight: 600;
color: ${props => props.color};
background-color: ${props=> props.background};
`;


const Text=styled.span`
`;

const Message=({color,background,type,text})=>(
    <MessageContainer>
        <TextDiv color={color} background={background}> 
            <Text>{type} : {text}</Text>
        </TextDiv>
    </MessageContainer>
);

Message.propTypes={
    text: PropTypes.string.isRequired,
};

export default Message;