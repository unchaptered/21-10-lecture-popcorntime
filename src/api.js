import axios from "axios";

const api=axios.create({
    baseURL: process.env.REACT_APP_URL,
    params:{
        api_key: process.env.REACT_APP_API,
        language: "en-US"
    }
});

api.get("tv/popular");

export const tvApi={
    popular:()=>api.get("tv/popular"),
    topRated:()=>api.get("tv/top_rated"),
    airingToday:()=>api.get("tv/airing_today"),
    tvDetail:(id)=>api.get(`tv/${id}`,{
        params: { append_to_response: "videos" }
    }),
    tvSearch:(term)=>api.get("search/tv",{
        params: { query: term }
    }),
};

export const movieApi={
    popular:()=>api.get("movie/popular"),
    upComing:()=>api.get("movie/upcoming"),
    nowPlaying:()=>api.get("movie/now_playing"),
    movieDetail:(id)=>api.get(`movie/${id}`,{
        params: { append_to_response: "videos" }
    }),
    movieSearch:(term)=>api.get("search/movie",{
        params: { query: term }
    }),
};

// Search 알고리즘에서 encoding 은 axios 가 자동으로 지원해줌.
// 그럼에도 인코딩을 하고싶으면... encodeURIComponent(term)