import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../components/Section";
import Poster from "../../components/Poster";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const TvContainer=styled.div`
    padding: 0 10px;
`;

const TvPresenter=({ popular, topRated, airingToday, error, loading })=>
    <>
    <Helmet>
        <title>Tv Shows | Unchaptered</title>
    </Helmet>
    {loading ?
        (<Loader />) :
        (
            <TvContainer>
                { popular && popular.length > 0 &&
                    ( <Section title="Popular Tv Shows">
                            { popular.map(element=>
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
                { topRated && topRated.length > 0 &&
                    ( <Section title="Top Rated Tv Shows">
                            { topRated.map(element=>
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
                { airingToday && airingToday.length > 0 &&
                    ( <Section title="Airing Today Tv Shows">
                            { airingToday.map(element=>
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
                    <Message type="error" text={error} color="rgba(255, 255,190,1)" background="rgba(200, 90, 60,1.0)" />
                }
            </TvContainer>
        )}
    </>;

TvPresenter.propTypes={
popular:PropTypes.array,
topRated:PropTypes.array,
airingToday:PropTypes.array,
error:PropTypes.string,
loading:PropTypes.bool.isRequired,
};

export default TvPresenter;