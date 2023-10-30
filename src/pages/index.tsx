import React from 'react';

import About from '../components/About';
import Case from '../components/Case';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import SendRoom from '../components/SendRoom';
import Service from '../components/Service';
import Why from '../components/Why';

const App = () => {
  return (
    <div className={`bg-background`}>
      <div className={`relative bg-background`}>
        <div className={`relative z-10 bg-background`}>
          <Header />
          <MainHero />
        </div>
      </div>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <Case />
      </LazyShow>
      <LazyShow>
        <Why />
      </LazyShow>
      <LazyShow>
        <Service />
      </LazyShow>
      <LazyShow>
        <FAQ />
      </LazyShow>
      {/* <SendRoom />
      <Footer /> */}
    </div>
  );
};

export default App;
