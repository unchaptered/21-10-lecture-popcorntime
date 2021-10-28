import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import propType from "prop-types";

import Nav from "./components/Nav";

import Home from"./routes/Home";
import Tv from "./routes/Tv";
import Detail from "./routes/Detail";
import Search from "./routes/Search";

export default ()=>{
    return (
        <Router>
            <>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" exact component={Tv} />
                    <Route path="/tv/popular" render={()=><h3>HHHHHHHHH</h3>} />
                    <Route path="/search" component={Search} />
                    <Route path="/detail" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    );
};