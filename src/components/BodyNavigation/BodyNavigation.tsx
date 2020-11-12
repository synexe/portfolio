import React from 'react';
import styled from 'styled-components';

const BodyNavigation = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BodyNavigationLine = styled.div`
  height: 1px;
  width: 30px;
  background-color: #000000;
  margin: 10px 0px;
`;

export const BodyNavigationComponent = (): JSX.Element => {
  return (
    <BodyNavigation>
      <BodyNavigationLine style={{ width: 60 }} />
      <BodyNavigationLine />
      <BodyNavigationLine />
    </BodyNavigation>
  );
};
