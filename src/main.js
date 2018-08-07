import React, { Component} from 'react';
import App from './App';
import Resume from './resume';
import Home from './home';
import Projectss from './projects';
import './mycss.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//import { Switch, Route } from 'react-router-dom';
//const Main  = () => {
//<Switch>
  //<Route exact path="/resume" component={Resume}/>
//</Switch>
//}
class Main extends Component {
render() {
    return (
      <HashRouter>
        <div>
        <div className="row header"  style={{marginLeft:"2em"}}>
          <div className="title col-sm-6">
                     <h1> Sondos Alsalooli </h1>
             <h5 className="line">  Cloudsystem Intern </h5>
           </div>


                <div className="nav home col-sm-6">
                 <li className="nav-item">
                 <NavLink to="/" className="nav-link" style={{fontSize:"20px", fontFamily:"Lato",color:"black"}}>HOME</NavLink>
                  </li>
                  <li className="nav-item">
                   <NavLink to="/resume" className="nav-link" style={{fontSize:"20px", fontFamily:"Lato",color:"black"}}>Resume</NavLink>

                   </li>
                   <li className="nav-item">
                       <NavLink to="/projects" className="nav-link" style={{fontSize:"20px", fontFamily:"Lato",color:"black"}}>Projects</NavLink>
                         </li>
                  </div>
            </div>
<hr/>

          <div className="content">

            <Route path="/resume" component={Resume}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projectss}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
