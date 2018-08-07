import React, { Component } from "react";


 class Resume extends Component {
  render() {
    return (
      <div>

        <div className="container">
              
           <div className="row">
          <div className="circle3">Education</div>
          <div className="vl1"></div>
          <p className="pp">
          <br/>
          <br/>

             Bachelor of Computer Science     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;                       <b> Graduated:</b> May 2018
           <br/>
           King Khaled University, Khamis Mushiet, Saudi Arabia  &nbsp;&nbsp;&nbsp; &nbsp;  <b> GPA </b>4.9/5
    </p>

            </div>
           <hr/>

           <div className="row ">
          <div className="circle4">COURSES AND TRAINING</div>
          <div className="vl1 "></div>
           <p className="pp">
    <br/>
    <br/>
            - March 2018 |<b> Connect Intensive - Front-End Web Developer Nanodegree [UDACITY].</b>
          <br/>- August 2017 | <b>Mobile App - Develop your Own App [Doroob]</b>
        <br/>- May 2017 | <b>Basic Mobile Maintenance Skills - [Doroob]</b>
    </p>

            </div>
           <hr/>

           <div className="row">
          <div className="circle3">EXPERIENCE</div>
          <div className="vl1"></div>
          <p className="pp" >
    <br/>
    <br/>

           <b>November 2017 – April 2018  Technical support, King Khaled University</b>
        <br/> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  Volunteer in technical support center in collage.
      <br/><b>February 2018 – April 2018 Teacher Assistant , King Khaled University</b>
           <br/> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Helping Teachers and Lecturers in teaching and preparing required material.

           </p>

    </div>

            <hr/>

                        <div className="row  navv">
                       <div className="nav">
                         <li className="nav-item col-sm-4">
                            <a className="nav-link fa fa-github"  style={{fontSize:"48px", color:"black"}} href="https://github.com/Sondos-Alsalooli"></a>
                          </li>

                          <li className="nav-item col-sm-4">
                            <a className="nav-link fa fa-linkedin" style={{fontSize:"48px", color:"black"}} href="https://www.linkedin.com/in/sondos-alsalooli-97b97b163/"></a>
                          </li>
                          <li className="nav-item col-sm-4">
                            <a className="nav-link link fa fa-youtube" style={{fontSize:"48px", color:"black"}} href="https://www.youtube.com/channel/UCEQiiVoietvjr-bHsWwkQ5A?"></a>
                          </li>

                        </div>
                      </div>




                </div>

      </div>
    );
  }
}
export default Resume;
