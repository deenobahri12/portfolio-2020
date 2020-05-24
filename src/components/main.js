import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume'
import AboutMe from './aboutme'
import Projects from './projects'




const Main = () => (
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          
    </Switch>
    </BrowserRouter>
)

export default Main;