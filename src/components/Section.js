import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionContainer=styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title=styled.span`
    font-size: 20px;
    font-weight: 400;
    padding-left: 20px;
`;

const Grid=styled.div`
    margin-top: 10px;
    background-color: rgba(50,50,50,0.2);
    padding: 20px 20px;

    gap: 10px;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, 250px); */
    grid-template-columns: repeat(6,1fr);
    justify-content: space-between;
    @media screen and (max-width:1500px){
        grid-template-columns: repeat(5,1fr);
    }
    @media screen and (max-width:1200px){
        grid-template-columns: repeat(4,1fr);
    }
    @media screen and (max-width:900px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    justify-content: space-space-around;
`;


const Section=({title,children})=>(
    <SectionContainer>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </SectionContainer>
);

Section.propTypes={
    title:PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Section;