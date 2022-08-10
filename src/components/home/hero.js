import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import heroBg from '../../assets/images/nav_img1.png'


const items = [
  {
    key: '1',
    title: 'Be Next Smart Investor With Us',
    content: 'We are an investment research company clienting investment advice, market analytics, reports, market, data, dashboards, equity, research, investment portfolio, recommendation.',
 }
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
     <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="" className="hero-btn" size="large">Get Started</Button>
                  <Button size="large" className="hero-btn-1">How it work </Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel> 
    </div>
  );
}

export default AppHero;