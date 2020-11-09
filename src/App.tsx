import React from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import { FullPageComponent } from './components/FullPage/FullPage';
import { HeroSection } from './sections/HeroSection';

function App(): JSX.Element {
  return (
    <FullPageComponent>
      <ReactFullpage.Wrapper>
        <HeroSection />
        <div className="section"></div>
      </ReactFullpage.Wrapper>
    </FullPageComponent>
  );
}

export default App;
