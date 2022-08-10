import React from 'react';

import pencilIcon from '../../assets/images/persnolize_B.png';
import personIcon from '../../assets/images/simple_B.png';
import cogIcon from '../../assets/images/smart_B.png';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function HomeCards() {
  return (
    <div id="homeCards" className="block cardsBlock mb-5">
      <div className="container-fluid">
        <Row align='center'  Row gutter={16} type="flex">
        <Col className="card-body" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 7 }}>
            <Card flex="auto" align="center"
              hoverable
              cover={<img className="cardIcon" alt="Test" src={pencilIcon} />}
            >
              <Meta title="Personalized" />
              <p>Invest in Globally Diversified Portfolio Of Stocks, Bonds And Other Asset Classes Tailored To Your Risk Tolerance.</p>
            </Card>
          </Col>

          <Col className="card-body" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 7 }}>
              <Card  align="center"
                hoverable
                cover={<img className="cardIcon" alt="Test" src={personIcon} />}
              >
                <Meta title="Simple" />
                <p>All Features In Madkhol Are Made To Make It Easler For You To Manage Investments  With Robo Adivisors.</p>
              </Card>
          </Col>

          <Col className="card-body" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 7 }}>
            <Card  align="center"
                hoverable
                cover={<img className="cardIcon" alt="Test" src={cogIcon} />}
              >
                <Meta title="Smart" />
                <p>We Use Smart Technology To Rebalance Your Portfollo Based On Market Movements And Reinvest Your Dividends.</p>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default HomeCards;