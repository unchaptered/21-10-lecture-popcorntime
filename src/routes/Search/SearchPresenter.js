import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../components/Section";
import Poster from "../../components/Poster";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const SearchContainer=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Form=styled.form`
width: 100%;
display: flex;
justify-content: center;
`;

const Input=styled.input`
width: 100%;
max-width: 500px;
height: 28px;
font-size: 18px;
padding-left: 15px;
background-color: rgba(255,255,255,0.1);
    &::placeholder{
        font-size: 14px;
    }
`;

const SearchPresenter=({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm })=>
    <>
        <Helmet>
            <title>Search | Unchaptered</title>
        </Helmet>
        <SearchContainer>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or Tv Shows..." defaultValue={searchTerm} onChange={updateTerm}/>
            </Form>
            {
                loading ?
                    (<Loader/>) :
                    (<>
                        { movieResults && movieResults.length>0 &&
                            ( <Section title="Movie Results">
                                { movieResults.map(element=>
                                    <Poster
                                        key={element.id}
                                        id={element.id}
                                        title={element.original_title}
                                        imageUrl={element.poster_path}
                                        rating={element.vote_average}
                                        year={element.release_date.substring(0, 4)}
                                        isMovie={true}/>
                                ) }
                            </Section>
                        )}
                        { tvResults && tvResults.length>0 &&
                            ( <Section title="Tv Shows Results">
                                { tvResults.map(element=>
                                    <Poster
                                        key={element.id}
                                        id={element.id}
                                        title={element.original_name}
                                        imageUrl={element.poster_path}
                                        rating={element.vote_average}
                                        year={element.first_air_date.substring(0, 4)}
                                        isMovie={false}/>
                                ) }
                            </Section>
                        )}
                        { error &&
                            <Message type="Error" text={error} color="rgba(255, 255,190,1)" background="rgba(200, 90, 60,1.0)" />
                        }
                        { movieResults && tvResults && movieResults.length<1 && tvResults.length<1 &&
                            <Message type="404" text="Nothing Found" color="rgba(180, 200, 255,1)" background="rgba(60, 90, 200,1.0)" />
                        }
                    </>)
            }
        </SearchContainer>
    </>;

SearchPresenter.propTypes={
movieResults: PropTypes.array,
tvResults: PropTypes.array,
searchTerm: PropTypes.string,
error:PropTypes.string,
loading:PropTypes.bool.isRequired,

handleSubmit: PropTypes.func.isRequired,
updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;