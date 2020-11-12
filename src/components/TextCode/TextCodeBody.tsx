import React from 'react';
import styled from 'styled-components';

const TextCodeBody = styled.span`
  position: absolute;
  user-select: none;
  color: #707070;
  font-family: 'La Belle Aurore', cursive;
  font-size: 20px;
`;

interface TextCodeBodyComponentProps {
  class: string;
}

export const TextCodeBodyComponent = (props: TextCodeBodyComponentProps): JSX.Element => {
  return <TextCodeBody className={props.class} />;
};
