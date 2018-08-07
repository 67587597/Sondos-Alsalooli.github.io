import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './mycss.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Resume  from './resume';
import Main from './main'

class Home extends Component {
  render() {
    return (

      <div className="App">


         <div className="container">

             <div className="row">
             <Row className="show-grid">

                 <div className="col-sm-3 circle">
                </div>



              <div className="col-sm-6 pr">
                <h1 className="ligth ">Welcome</h1>
                <h2>Know more about me: </h2>
                <div className="nav">
                <Col xs={6} md={6}>
                <li className="nav-item " >
               <NavLink to="/resume" className="nav-link circle1"  style={{paddingTop: "4em", marginLeft:"3px"}}>Resume</NavLink>
                </li>
                  </Col>
                  <Col xs={6} md={6}>
                  <li className="nav-item">
                      <a className="nav-link circle1"  style={{paddingTop: "4em"}} href="https://github.com/Sondos-Alsalooli/udacityprojects"> Projects</a>
                  </li>
                  </Col>
                 </div>
                </div>

             </Row>
             </div>

      <hr/>
                <Row className="show-grid">
                <div className="row  navv">
                 <div className="nav" style={{paddingTop: "0.4em", paddingBottom: "0.3em", marginLeft: "6em", textAlign: "center"}}>
<Col xs={4}>
                   <li className="nav-item col-sm-4">
                      <a className="nav-link fa fa-github" style={{fontSize:"48px"}} href="https://github.com/Sondos-Alsalooli"></a>
                    </li>
                    </Col>
                    <Col xs={4}>
                    <li className="nav-item col-sm-4">
                      <a className="nav-link fa fa-linkedin" style={{fontSize:"48px"}} href="https://www.linkedin.com/in/sondos-alsalooli-97b97b163/"></a>
                    </li>
                    </Col>
                    <Col xs={4}>
                    <li className="nav-item col-sm-4">
                      <a className="nav-link link fa fa-youtube" style={{fontSize:"48px"}} href="https://www.youtube.com/channel/UCEQiiVoietvjr-bHsWwkQ5A?"></a>
                    </li>
                    </Col>
                  </div>
                </div>
              </Row>


          </div>


      </div>
    );
  }
}

export default Home;
