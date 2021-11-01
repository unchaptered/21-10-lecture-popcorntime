import React from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default class extends React.Component{
    state={
        popular:null,
        topRated:null,
        airingToday:null,
        error:null,
        loading:true
    }
    async componentDidMount() {
        try{
            const { data: { results:popular } }=await tvApi.popular();
            const { data: { results:topRated } }=await tvApi.topRated();
            const { data: { results:airingToday } }=await tvApi.airingToday();

            this.setState({ popular, topRated, airingToday });
        }catch{
            this.setState({ error:"Can't find Tv information" });
        }finally{
            this.setState({ loading: false });
        }
    };

    render(){
        const { popular, topRated, airingToday, error, loading }=this.state;
        return <TvPresenter
            popular={popular}
            topRated={topRated}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
    }
}