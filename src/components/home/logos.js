import React from 'react';

import { Row, Col } from 'antd';

import nyTimes from '../../assets/images/ny_times.png'
import businessInsider from '../../assets/images/business_insider.png'
import cnbc from '../../assets/images/cnbc.png'
import forbes from '../../assets/images/forbes.png'


const items = [
  {
    key: '1',
    img: nyTimes,
  },
  {
    key: '2',
    img: cnbc,

  },
  {
    key: '3',
    img: businessInsider,
  },
  {
    key: '4',
    img: forbes,
  }
]

function AppLogos() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col  flex="1"  md={{ span: 6 }} key={item.key}>
                <div className="content business-logos">
                  <img src= {item.img } height="50px" ></img>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppLogos;