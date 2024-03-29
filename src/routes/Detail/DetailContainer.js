import React from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    constructor(props){
        super(props);
        const { location: { pathname }}=props;

        this.state={
            result:null,
            error:null,
            loading:true,
            isMovie: pathname.includes("/movie/")
        };
    };

    async componentDidMount(){
        const {
            match: { params: { id } },
            history: { push },
        }=this.props;
        const { isMovie }=this.state;

        const parseIntId=parseInt(id);
        if(isNaN(parseIntId))
            return push("/");

        let result=null;
        try{
            ({ data:result }=(isMovie) ?
                await movieApi.movieDetail(parseIntId) :
                await tvApi.tvDetail(parseIntId));
            
        }catch{
            this.setState({ error: "Can't find anything."});
        }finally{
            this.setState({ loading:false, result });
        }
    };

    render() {
        const { result, error, loading }=this.state;
        console.log(result);
        return <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        />
    };
};