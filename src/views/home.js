import React from 'react';

import AppHero from '../components/home/hero';
import AppLogos from '../components/home/logos';
import AppFeature from '../components/home/feature';
import AppCards from '../components/home/cards';
import AppWorks from '../components/home/works';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppLogos/>
      <AppFeature/>
      <AppCards/>
      <AppWorks/>
      <AppContact/>
    </div>
  );
}

export default AppHome;