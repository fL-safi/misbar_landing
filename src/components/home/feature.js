import React from 'react';
import { Button } from 'antd';

import image1 from '../../assets/images/about_us.png';
import image2 from '../../assets/images/robo.png';
import image3 from '../../assets/images/what_we_do.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block mainxBlock bgGray">
      <div className="container-fluid">
      
        <Row gutter={[16, 16]}>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
            <div className="contentHolder content-left">
              <h2>About Us</h2>
              <p>Fintech company specialized in robo advisory business, we are an investment research company ollering investment advice, market analytics, reports, market data, dashboards, equity research, investment portiolio recommendation.</p>
            </div>
          </Col>
          <Col flex="auto" className="contentCol" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
          <img alt="Test" src={image1} />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          
          <Col className="contentCol"  xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 10 }}>
          <img className="mobileHidden" alt="Test" src={image3} />
          </Col>
          <Col className="contentCol" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
            <div className="contentHolder content-right">
              <h2>What we do</h2>
              <p>We collect the necessary data about investment, market analytics, reports, market data, dashboards, equity research, investment portfolio recommendations with the robo advisor.</p>
              <p>So that we can help you make investments without having basic investment knowledge and let us do the work for you.</p>
              <div className="btnHolder">
                  <Button type="" className="hero-btn" size="large">Get Started</Button>
                  <Button size="large" className="hero-btn-1">How it work </Button>
                </div>
            </div>
          </Col>

          <Col className="contentCol"  xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 0 }}>
          <img className='mobileVisible' alt="Test" src={image3} />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col className="contentCol" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
            <div className="contentHolder content-left">
              <h2>What Robo Advision</h2>
              <p>Robo-advisors (also spelled robo adviser or roboadvisor) are digital platforms that provide automated, algorithm-driven financial planning services with little to no human supervision, a typical robo- advisor collects information from clients about their financial situation and future goals through an online survey and then uses the data to offer advice and automatically invest client assets.</p>
            </div>
          </Col>
          <Col className="contentCol" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
          <img alt="Test" src={image2} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;