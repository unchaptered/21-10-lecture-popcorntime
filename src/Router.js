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
                    <Route path="/search" component={Search} />

                    <Route path="/movie/:id" component={Detail} />
                    <Route path="/tv/:id" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    );
};