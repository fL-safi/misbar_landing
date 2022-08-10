import React, { useState } from 'react';
import logo from '../../logo.png';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>

        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65" affix={false}>
            <Link href="#hero" title="About us" />
            <Link href="#about" title="Our services" />
            <Link href="#feature" title="Why us" />
          </Anchor>
        </div>

        <div className="mobileHidden ">
          <Anchor targetOffset="65" affix={false}>
            <Link href="#works" title="Sign in" />
            <Link className='signup-btn' href="#faq" title="Sign up" />
          </Anchor>
        </div>

        <div className="mobileVisible">
          <Button type="orange" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65" affix={false}>
              <Link href="#hero" title="About us" />
              <Link href="#about" title="Our services" />
              <Link href="#feature" title="Why us" />
              <Link href="#works" title="Sign in" />
              <Link href="#faq" title="Sign up" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;