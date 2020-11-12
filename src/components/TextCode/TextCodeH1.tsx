import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const TextCodeH1 = styled.span`
  user-select: none;
  color: #707070;
  font-family: 'La Belle Aurore', cursive;
  font-size: 20px;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;

interface TextCodeH1ComponentProps {
  class: string;
}

export const TextCodeH1Component = (props: TextCodeH1ComponentProps): JSX.Element => {
  return <TextCodeH1 className={props.class} />;
};
