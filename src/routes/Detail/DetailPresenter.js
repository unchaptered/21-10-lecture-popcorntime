import React from "react";
import { Helmet } from "react-helmet";
import PropTypes, { element } from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";

const DetailContainer=styled.div`
    /* navTop 56px main padding-top 15px*3  */
    width: 100%;
    height: calc(100vh - 56px);
    position: relative;
    display: grid;
    padding: 50px;
    gap: 20px;
    grid-template-columns: 1fr 3fr;
    @media screen and (max-width:1500px){
        grid-template-columns: 1fr 2fr;
    }
    @media screen and (max-width:1200px){
        grid-template-columns: 1fr 1.5fr;
    }
    @media screen and (max-width:900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px){
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 1fr;
    }
`;
const Backdrop=styled.div`
    position: absolute;
    z-index:0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props=>props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.3;
`;
const Content=styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    height: 100%;

`;
const Cover=styled.div`
    z-index:2;
    width: 100%;
    height: 100%;
    background-image: url(${props=>props.bgImage});
    background-position: center center;
    background-size: cover;
    /* @media screen and (max-width: 600px){
        width:80%;
        background-size: scale-down;
    } */
`;
const Data=styled.div`
display: flex;
flex-direction: column;
`;
const Devider=styled.span`
margin: 0 3px;
`;
const Title=styled.span`
    font-size: 26px;
    margin-bottom: 10px;
    @media screen and (max-width:1500px){
        font-weight: 24px;
    }
    @media screen and (max-width:1200px){
        font-size: 22px;
    }
    @media screen and (max-width:900px) {
        font-size: 20px;
    }
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`;
const Meta=styled.div`
`;
const Item=styled.span`
    opacity: 0.5;
    margin-bottom: 10px;
    @media screen and (max-width: 600px){
        font-size: 14px;
    }
`;
const Divider=styled.span`
    opacity: 0.5;
`;
const Overview=styled.p`
    opacity: 0.5;
    @media screen and (max-width: 600px){
        font-size: 14px;
    }
`;

const DetailPresenter=({ result, error, loading })=>
    loading ?
        ( 
        <>
            <Helmet>
                <title>Loading... | Unchaptered</title>
            </Helmet>
            <Loader />
        </>
        ) : (
        <>
            <Helmet>
                <title>{result.original_title ?
                        result.original_title :
                        result.original_name } | Unchaptered</title>
            </Helmet>
            <DetailContainer>
                <Backdrop
                    bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                />
                <Content>
                    <Cover
                        bgImage={ result.poster_path ?
                                `https://image.tmdb.org/t/p/original${result.poster_path}` :
                                require("../../assets/noPosterSmall.png") }/>
                </Content>
                <Data>
                    <Title>{ result.original_title ?
                        result.original_title :
                        result.original_name }</Title>
                    <Meta>
                        <Item>{result.release_date ?
                            result.release_date.substring(0,4) :
                            result.first_air_date.substring(0,4)
                        }</Item>
                        <Devider> ◽ </Devider>
                        <Item>{result.runtime ?
                            result.runtime :
                            result.episode_run_time[0]
                        } MIN </Item>
                        <Devider> ◽ </Devider>
                        <Item>
                            { result.genres &&
                                result.genres.map((genres,index)=>
                                    index===result.genres.length+1 ?
                                    `${genres.name}` :
                                    `${genres.name} / `
                            )}
                        </Item>
                    </Meta>
                    <Overview>{result.overview}</Overview>
                </Data>
            </DetailContainer>
        </>);

DetailPresenter.propTypes={
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default DetailPresenter;