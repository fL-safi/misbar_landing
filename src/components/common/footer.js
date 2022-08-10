import React from 'react';

import logo from '../../logo.png';
import { Row, Col } from 'antd';

function AppFooter() {
  return (
    <div style={{ margin: "90px 0px 0px 0px" }} className="container-fluid">
      <Row align="top" className="footer" gutter={[16, 16]}>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4 }}>
          </Col>
          <Col align="start" flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
            <div className="logo" >
              <img src={logo} style={{ marginBottom: "77px" }} />
              <ul className="socials">
              <li><a href="https://www.facebook.com/"><i className="fab fa-google"></i></a></li>
              <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.pinterest.com/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
            <div className="copyright">Copyright &copy; 2022</div>
            </div>
          </Col>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <div className="menu">
                <h2>Accounts</h2>
                <ul className="box" >
                    <li> <a href="#" >Investing</a> </li>
                    <li> <a href="#" >IRAs & 401(k)s</a> </li>
                    <li> <a href="#" >Roth IRAs</a> </li>
                    <li> <a href="#" >Case Reserve</a> </li>
                    <li> <a href="#" >Checking</a> </li>
                </ul>
            </div>
          </Col>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <div className="menu">
               <h2>Investment</h2>

              <ul className="box" >
                  <li> <a href="#" >Portfolio Option</a> </li>
                  <li> <a href="#" >Responsible</a> </li>
                  <li> <a href="#" >Tax Smart</a> </li>
                  <li> <a href="#" >Chartiable Giving</a> </li>
                  <li> <a href="#" >Retirement Income</a> </li>
              </ul>
            </div>
          </Col>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <div className="menu">
              <h2>Tools</h2>

              <ul className="box" >
                  <li> <a href="#" >Planning</a> </li>
                  <li> <a href="#" >Track Goals</a> </li>
                  <li> <a href="#" >Dashboards</a> </li>
                  <li> <a href="#" >RoboAdvisors</a> </li>
              </ul>
            </div>
          </Col>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <div className="menu">
              <h2>More</h2>

              <ul className="box" >
                  <li> <a href="#" >Help Center</a> </li>
                  <li> <a href="#" >FAQ</a> </li>
                  <li> <a href="#" >Expert Guidance</a> </li>
              </ul>
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default AppFooter;