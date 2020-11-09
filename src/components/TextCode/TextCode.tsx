import React from 'react';
import styled from 'styled-components';

const TextCode = styled.span`
  position: absolute;
  user-select: none;
  color: #707070;
  font-family: 'La Belle Aurore', cursive;
  font-size: 20px;
`;

interface TextCodeComponentProps {
  class: string;
}

export const TextCodeComponent = (props: TextCodeComponentProps): JSX.Element => {
  return <TextCode className={props.class} />;
};
