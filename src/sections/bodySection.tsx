import React from 'react';

interface BodySectionProps {
  scrollPosition: number;
}

export const BodySection = (props: BodySectionProps): JSX.Element => {
  const {} = props;
  return <div className="section fp-auto-height-responsive"></div>;
};
