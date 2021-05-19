import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Circle1 from "./components/Circle1";
import Circle2 from "./components/Circle2";


function App() {

  return (
    <div className="App">
        <div className="main2"></div>
        <div className="main"></div>
        <Router>
            <Circle1/>
            <Circle2/>
            <Switch>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={500}
                            classNames="fade"
                        >
                            <Switch location={location}>


                                <Route path="/portfolio">
                                    <Home />
                                </Route>

                                <Route exact path="/my-page">
                                    <Home />
                                </Route>

                                <Route path="/my-page/about">
                                    <About />
                                </Route>

                                <Route path="/my-page/portfolio">
                                    <Portfolio />
                                </Route>

                                <Route path="/my-page/contacts">
                                    <Contacts />
                                </Route>

                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
