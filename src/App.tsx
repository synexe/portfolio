import React from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import { FullPageComponent } from './components/FullPage/FullPage';
import { HeroSection } from './sections/HeroSection';
import { BodySection } from './sections/bodySection';

function App(): JSX.Element {
  return (
    <FullPageComponent>
      <ReactFullpage.Wrapper>
        <HeroSection />
        <BodySection />
      </ReactFullpage.Wrapper>
    </FullPageComponent>
  );
}

export default App;
