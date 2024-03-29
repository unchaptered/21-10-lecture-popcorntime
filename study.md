# Announcements

- [] What is React
- [] Index
  > Examples on react-router-dom
  > Guides on react-router-dom
  > API on react-router-dom
  > Styles on styled-components
  > MovieApp DB on API
  > Container Presenter Pattern
  > Object Destructuring (객체 비구조화 할당) on vanila JS

## Examples

## Guides

## API

- [] Hooks
- [✅] Link [Topic_000]
- [] NewLink
- [] Prompty
- [✅] Redirect [Topic_003]
- [✅] Route [Topic_006]
- [✅] Routers : Browser,Hash,Memory,Static, with + Router
- [✅] Composition [Topic_002]
- [✅] Switch [Toic_004]
- [] gneratePath
- [] history
- [] location
- [] match
- [] matchPath

### API \_ Routers

- [✅] BrowserRouter [Topic_001]
- [✅] HashRouter [Topic_001]
- [] MemoryRouter
- [] StaticRouter
- [✅] withRouter [Topic-005]

#### Topic 000 : What is the different between [Link to=""] and [a href=""] ?

> First, <br> (a href="" /) is some kind of html tags.<br> (Link to =""/) is react-router-dom's components.
> Second, <br> (a href="" /) is cliked, broswer is being refresh for refresh. <br> (Link to="" /) is cliked, broswer ins't being refresh for refresh. <br> When you clicked (Link /), React change Route Components.

```javascript
console.log("Nav.js");
import { withRouter, Link } from "react-router-dom";

export default withRouter(() => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/popular">Popular</Link>
    </nav>
  );
});
```

#### Topic 001 : What is the different between [BrwoserRouter] and [HashRouter] ?

> These routers' function is basically same. <br> Only one different is in domain link. <br> Such as, In BroserRouter link is right this.

- localhost:3000/
- localhost:3000/search

> And, In HashRouter link is right this.

- localhost:3000/#
- localhost:3000/#/search

> So, If you want users to feel "it seems like a web!" when they come into your App. <br> You would use BrowserRouter.

> But, Your intension seems like "it seems like a app". <br> You need to use HashRouter

#### Topic 002 : What is [Composition] ?

> Composition is the render method more than two Route, in same time. <Br> Look under code.

```javascript
import React from "react";
import { BroswerRouter as Router, Route } from "react-router-dome";
import Tv from "./Routes/Tv";
// Tv render <h3> Tv </h3>
// This is Composition <> </>
export default () => {
  <Router>
    <>
      <Route path="/tv" component={Tv} />
      <Route path="/tv/popular" render={() => <h5>Popular</h5>} />
    </>
  </Router>;
};
```

> When you visit [localhost:3000/tv]. <br> Browser give you <h3>Tv</h3> And you visit [localhost:3000/tv/popular]. <br> Browser give you <h3>Tv</h3> <h5>Popular <h5>

#### Topic 003 : What is [Redirect] ?

> Redirect looks like express middleware. <br> If user try to visit [wrong_url], Browser guide him to [default_url]

```javascript
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
// Routes render <h3>`${RouteName}`</h3>
// Redirect from="*" to="/" />
// In Redirect, "/" is default link.
export default () => {
  <Router>
    <>
      <Route path="/" exact compoent={Home} />
      <Route path="/tv" exact compoent={Tv} />
      <Route path="/search" exact compoent={Search} />
      <Redirect from="*" to="/" />
    </>
  </Router>;
};
```

> In this code, if user try to visit [/potato]. <br> React can't find [/potato] .<br> So React guide user to [/].

#### Topic 004 : What is [Switch] ?

> Switch is function to prevent [Composition] . <br> If user want to visit /tv/detail or /tv/popular. <br> React need to determine "Hey, should i redner /tv while you visit /tv/detail" ?

```javascript
import React from "react";
import { BroswerRouter as Router, Route } from "react-router-dome";
import Tv from "./Routes/Tv";
// Tv render <h3> Tv </h3>
// This is Switch <Switch> <Switch/>
export default () => {
  <Router>
    <Switch>
      <Route path="/tv" exact component={Tv} />
      <Route path="/tv/detail" render={() => <h5>Detail</h5>} />
      <Route path="/tv/popular" render={() => <h5>Popular</h5>} />
    </Switch>
  </Router>;
};
```

> In Switch, You should one render in one route.

- when you visit /tv/detail

```html
<!--Datail-->
<h5>detail</h5>
```

- when you visit /tv/popular

```html
<!--Popular-->
<h5>Popular</h5>
```

- Finally, when you visit /tv

```html
<!--Tv Components-->
<h3>Tv</h3>
```

#### Topic 005 : What is [withRouter] ?

> This router is used for wraps around other Components. <br> In doing so, other Components can have props.

> If you want to wrap around components by withRouter... <br> You can do it by 2 methods.

- standard export default

```javascript
import { withRouter } from "react-router-dom";

const Nav = () => (
  <Nav>
    <span>something</span>
  </Nav>
);

export default withRouter(Nav);
```

- stylish export default

```javascript
import { withRouter } from "react-router-dom";

export default withRouter((props) => (
  <Nav>
    <span>something</span>
  </Nav>
));
```

#### Topic 006 : [withRouter] is needed for [route] to have [props] ?

> To begin with, that isn't needed for [route] to have [props] <br> In React, some kind of Router gives Route props. <br>Such as, BroswerRouter and HashRouters.

## Styles

> How can you connect between Component.js Component.css? <br> We suggest some kind of method to connect these.

- [✅] All CSS connect to one index.js [method 1]
- [✅] One CSS connect to one Compoennts.js [method 2]
- [✅] One CSS Module connect to correct Component.js by randomize function. [method 3]
- [✅] [Styled-Components] Type Styles by Javascript [method 4]

### method 1 :: one css connection

> It's so simple to connect these. <br> But, This method is so heavier than others.

```javascript
console.log("index.js");
import "./index.css";
```

### method 2 :: component css connection

> It's more complicated than method 1. <br> But We compile one css to one js. <br> Nevertheless, We need to remember all className to correct use. It's so insane to us

```javascript
console.log("index.js");
import "./index.css";
```

```javascript
console.log("Nav.js");
import "./Nav.css";
// className="navTop" in js
// class="navTop" in css
```

### method 3 :: randomize css connection

> First, when you see it, it's so weird. <br> Becasuse, the browser puts a tail on the class. <br> This tail means randomized serial code. <br> Nevertheless, we need to remeber className.<br>So, it is purposed for mini project

```javascript
console.log("index.js");
import styles from "./index.module.css";
// className={styles.index} in js
// class="index" in css
```

```javascript
console.log("Nav.js");
import styles from "./nav.module.css";
// className={styles.navTop} in js
// class="navTop" in css
```

> Finally you recieve rigth this! This method is used by Instagram.

```html
<nav class="Nav_navTop_1bm23"></nav>
<!-- class="Component_class_randomized -->
```

> But this method isn't ideal. <br> Because, in javascript you can't use syntax "-"<br> So, you can't use BEM model by easy. <br> If you want to use BEM Model in styles sheets.

> Type styles["navTop-resizer"]... <br>Not styles.navTop-resizer

```scss
.navTop-resizer {
  background-color: red;
  @media screen and (min-width: 1000px) {
    background-color: blue;
  }
}
```

```javascript
console.log("Nav.js");
import styles from "./nav.module.scss";
export default ()=>{
  <nav className={styles["navTop-resizer]}>
    <span> 안녕 난 네비게이션이야 </span>
  </nav>
}
```

### method 4 :: [Styled-Components]

> Styled-components is very useful to manage style-sheets. <br> All style option about component, is contained in Component.js <br> You don't need to manage sepertaed design file in folder.

```javascript
import React from "react";
import styled from "styled-components";

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default () => {
  <Nav>
    <a href="/">Home</a>
    <a href="/tv">Tv</a>
    <a href="/search">Search</a>
  </Nav>;
};
```

## The MovieApp DB

> Our purpose ,using this movie api, is for study about api. <br> We don't illegally host the movie. <br> I don't know this site is llegal.<br>So I suggest don't use this api for bussiness or hosting.

- https://www.themoviedb.org/

## Container Presenter Pattern

## Object Destructuring

> Object Destructuring means like this.

```javascript
// const {}=req; 이런 부분
export function profileGet=(req,res)=>{
  const {
    params: { _id },
    body: { username, password, password2, email:userEmail}
  }=req;
};
```

참고 문헌 : https://ui.toast.com/weekly-pick/ko_20190731
