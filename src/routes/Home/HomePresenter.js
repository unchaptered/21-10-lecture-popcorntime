import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../components/Section";
import Poster from "../../components/Poster";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const HomeContainer=styled.div`
    padding: 0 10px;
`;

const HomePresenter=({ popular, upComing, nowPlaying, error, loading })=>
    <>
    <Helmet>
        <title>Movies | Unchaptered</title>
    </Helmet>
    { loading ?
        (<Loader />) :
        (
            <HomeContainer>
                { nowPlaying && nowPlaying.length>0 &&
                    ( <Section title="Now Playing">
                            { nowPlaying.map(
                            element=>
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
                { popular && popular.length>0 &&
                    ( <Section title="Popular Movie">
                            { popular.map(
                            element=>
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
                { upComing && upComing.length>0 &&
                    ( <Section title="UpComing Movie">
                            { upComing.map(
                            element=>
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
                { error &&
                    <Message type="error" text={error} color="rgba(255, 255,190,1)" background="rgba(200, 90, 60,1.0)" />
                }
            </HomeContainer>
        )}
    </>;


// If any conditions is false, HomePresenter render null;
HomePresenter.propTypes={
    popular:PropTypes.array,
    upComing:PropTypes.array,
    nowPlaying:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
};

export default HomePresenter;



// {
//     nowPlaying &&
//     nowPlaying.length > 0 &&
//     (
//         <Section title="Now Playing">
//             {
//                 nowPlaying.map(element=>element.title)
//             }
//         </Section>
//     )
// }