import React from 'react';
import { ScrollIndicationComponent } from '../components/ScrollIndication/ScrollIndication';
import { TextCodeBodyComponent } from '../components/TextCode/TextCodeBody';
import styled from 'styled-components';
import { ContentHeroComponent } from '../components/ContentHero/ContentHero';

const Hero = styled.div`
  height: 100%;
  width: 100%;
`;

export const HeroSection = (): JSX.Element => {
  return (
    <div className="section fp-auto-height-responsive">
      <Hero>
        <TextCodeBodyComponent class="code-body-start" />
        <TextCodeBodyComponent class="code-body-end" />
        <ScrollIndicationComponent />
        <ContentHeroComponent />
      </Hero>
    </div>
  );
};
