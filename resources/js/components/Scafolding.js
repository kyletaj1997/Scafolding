import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './pages/About'
import List from './pages/List'
import Home from './pages/Home'
import Nav from './pages/Nav'
import  { BrowserRouter as Routers,Switch,Route} from 'react-router-dom';

class Scafolding extends Component {
    render() {
        return (
            <Routers>
            <div>
            <Nav></Nav>
            <Switch>
             <Route path="/" exact component={Home}></Route>
             <Route path="/About" exact  component={About}></Route>
             <Route path="/List" exact component={List}></Route>
             </Switch>
            </div>
            </Routers>
        );
    }
}

if (document.getElementById('scafolding')) {
   ReactDOM.render(<Scafolding />, document.getElementById('scafolding'));
}
