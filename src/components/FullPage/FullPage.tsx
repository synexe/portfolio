import React, { ReactChild } from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';

interface FullPageComponentProps {
  children: ReactChild;
}

export const FullPageComponent = (props: FullPageComponentProps): JSX.Element => {
  const { children } = props;

  return (
    <ReactFullpage
      scrollingSpeed={700}
      sectionsColor={['#181818', '#F4F4F4']}
      verticalCentered={false}
      render={() => children}
    />
  );
};
