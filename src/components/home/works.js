import React from 'react';

import { Row, Col } from 'antd';

import lineImg1 from '../../assets/images/vector1.png';
import lineImg2 from '../../assets/images/vector2.png';
import lineImg3 from '../../assets/images/vectorMob.png';
import icon1 from '../../assets/images/works-icon-1.png';
import icon2 from '../../assets/images/works-icon-2.png';
import icon3 from '../../assets/images/works-icon-3.png';
import ficon1 from '../../assets/images/Feature-Icon-1.png';
import ficon2 from '../../assets/images/Feature-Icon-2.png';
import ficon3 from '../../assets/images/Feature-Icon.png';

function AppWorks() {
  return(
    <div id="works" className=" worksBlock">
      <div className="container-fluid">
        <Row flex="1" className="works-h3 header" align='center'  gutter={[16, 16]}>
            <div className="mobileHidden"> <img src={icon3} style={{marginTop:"-100px"}} /> </div>
            <h3>How it's work</h3>
            <div className="mobileHidden"> <img src={icon1} /> </div>
        </Row>
        <Row className="works-absolute" align='center'  gutter={[16, 16]}>
        
          <Col className="works-card-body right" flex="auto" xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 6 }}>
            <div className="contentHolder ">
              <h3>We Learn About You</h3>
              <p>Where are you in your financial life and what are you investing for? how much risk are you comfortable with?</p>
            </div>
          </Col>

          <Col className="flex-end" align="bottom"  xs={{ span: 10 }} sm={{ span: 16 }} md={{ span: 2 }}>
            <img className="mobileHidden" style={{ marginRight: "-8px"}} align="right" src={lineImg1} />
            <img className="mobileVisible"  alt="" src={lineImg3} />

          </Col>

          <Col  className="works-card-body works-centered" xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 6 }}>
            <div className="contentHolder ">
              <h3>We set All for you</h3>
              <p>Based on your data we will recommend an investing plan designed for your risk tolerance and time horizon</p>
            </div>
          </Col>

          <Col className="flex-end"  xs={{ span: 10 }} sm={{ span: 10 }} md={{ span: 2 }}>
            <img className="mobileHidden" style={{ marginLeft: "-8px"}} align="left" alt="" src={lineImg2} />
            <img className="mobileVisible" alt="" src={lineImg3} />

          </Col>

          <Col className="works-card-body left" xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 6 }}>
            <div className="contentHolder ">
              <h3>Let Money to work</h3>
              <p>Even when you sleep, once we get you set-up in 5 minute, we'll always working on your portatolio to rebalance it regulary</p>
            </div>
          </Col>
         
        </Row>

        <Row flex="1" className="works-h3 header" align='center'  gutter={[16, 16]}>
            <div className="work-icon-box "> <img src={ficon3}  /> <p>Invest saving</p> </div>
            <div></div>
            <div className="work-icon-box "> <img src={ficon2}  /> <p>Shop gather</p> </div>
        </Row>
        <Row flex="1" className="works-row-3 header" align='center'  gutter={[16, 16]}>
            <div className="work-icon-box "> <img src={ficon1}  /> <p>Expenses control</p> </div>
            <div></div>
            <div className="mobileHidden"> <img src={icon2} /> </div>
        </Row>
      </div>
    </div>
  );
}

export default AppWorks;