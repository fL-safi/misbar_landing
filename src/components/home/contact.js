import React from 'react';

import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';

const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid" align="center">
      <Row  className='contact-row' gutter={[16, 16]}>
          <Col flex="auto" className="" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div className="titleHolder">
              <h2>Get in Touch</h2>
              <p>Fill up the form and our team will get back to you within 24 haours  </p>
            </div>
          </Col>

          <Col flex="auto"  className="" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 16 }}>     
            
            <Form
                name="contact"
                className="contact-form"
                initialValues={{ remember: true }}
              >
              <div className="disp-flex">
                <Form.Item
                  name="fullname"
                  rules={[
                    { 
                      required: true,
                      message: 'Please enter your full name!' 
                    }]
                  }
                >
                  <FaUserAlt />
                  <Input placeholder=" gardeputro@gmail.com" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <FaEnvelope />
                  <Input placeholder="gardeputro@gmail.com"/>
                </Form.Item>
              </div>

              <Form.Item
                name="message"
              >
                <TextArea placeholder="Message" />
              </Form.Item>

              <Form.Item>
                <Button type="custom" htmlType="submit" className="login-form-button">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
      </Row>
      </div>
    </div>  
  );
}

export default AppContact;