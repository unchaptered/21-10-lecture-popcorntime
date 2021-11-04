import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";

const PosterContainer=styled.div`
    font-size:  12px;
`;

const Image=styled.div`
    background-image: url(${props=>props.bgUrl});
    height: 350px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating=styled.span`
    position: absolute;
    bottom: 31px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;
const ImageDiv=styled.div`
        margin-bottom:5px;
        &:hover{
            ${Image} {
                opacity: 0.3;
            }
            ${Rating} {
                opacity: 1;
            }
        }
    
        position: relative;
    `;
const Title=styled.span`
    font-size: 14px;
    margin: 7px 0 3px 0;
    display: block;
`;
const Year=styled.span`
    font-size: 10px;
    color: rgba(255,255,255,0.3);
`;

const Poster=({id, imageUrl, title, rating, year, isMovie=false})=>(
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}` } >

        <PosterContainer>
            <ImageDiv>
                <Image
                    bgUrl={ imageUrl ?
                        `https://image.tmdb.org/t/p/w300${imageUrl}` :
                        require("../assets/noPosterSmall.png")
                    } />
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐
                    </span>{" "}
                    {rating}/10
                </Rating>
                <Title>
                    {title.length > 18 ? `${title.substring(0, 18)}...` : title}
                </Title>
                <Year>{year}</Year>
            </ImageDiv>
        </PosterContainer>

    </Link>
);

Poster.propTypes={
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,

    isMovie: PropTypes.bool,
};

export default Poster;