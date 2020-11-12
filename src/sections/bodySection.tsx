import React from 'react';
import { BodyNavigationComponent } from '../components/BodyNavigation/BodyNavigation';
import { HeaderComponent } from '../components/Header/Header';

interface BodySectionProps {
  scrollPosition?: number;
}

export const BodySection = (props: BodySectionProps): JSX.Element => {
  const {} = props;
  return (
    <div className="section fp-auto-height-responsive">
      <HeaderComponent />
      <BodyNavigationComponent />
    </div>
  );
};
