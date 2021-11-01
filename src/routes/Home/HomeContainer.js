import React from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
    // Declare state
    state={
        popular:null,
        upComing:null,
        nowPlaying:null,
        error: null,
        loading: true,
    };

    async componentDidMount(){
        try{
            const { data: { results:popular } }=await movieApi.popular();
            const { data: { results:upComing } }=await movieApi.upComing();
            const { data: { results:nowPlaying } }=await movieApi.nowPlaying();

            this.setState({ popular, upComing, nowPlaying });
        }catch{
            this.setState({ error:"Can't find movies information" });
        }finally{
            this.setState({ loading:false });
        }
    };

    render(){
        const { popular, upComing, nowPlaying, error, loading }=this.state;
        return <HomePresenter
            popular={popular}
            upComing={upComing}
            nowPlaying={nowPlaying}
            error={error}
            loading={loading}
        />
    };
}
