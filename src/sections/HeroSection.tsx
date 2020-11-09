import React from 'react';
import { ScrollIndicationComponent } from '../components/ScrollIndication/ScrollIndication';
import { TextCodeComponent } from '../components/TextCode/TextCode';
import styled from 'styled-components';

const Hero = styled.div`
  height: 100%;
  width: 100%;
`;

export const HeroSection = (): JSX.Element => {
  return (
    <div className="section fp-auto-height-responsive">
      <Hero>
        <TextCodeComponent class="code-body-start" />
        <TextCodeComponent class="code-body-end" />
        <ScrollIndicationComponent />
      </Hero>
    </div>
  );
};
