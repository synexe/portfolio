import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollIndicationAnimation = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;

const ScrollIndication = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${ScrollIndicationAnimation} 0.6s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;

const ScrollIndicationText = styled.span`
  color: #8d8d8d;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  user-select: none;
`;

const ScrollIndicationWrap = styled.div`
  height: 50px;
  margin-top: 20px;
  overflow: hidden;
`;

const ScrollIndicationLineAnimation = keyframes`
  0% { transform: translateY(-60px); }
  100% { transform: translateY(60px); }
`;

const ScrollIndicationLine = styled.div`
  height: 40px;
  width: 1px;
  background-color: #8d8d8d;
  animation: ${ScrollIndicationLineAnimation} 2s ease-out infinite;
`;

export const ScrollIndicationComponent = (): JSX.Element => {
  return (
    <ScrollIndication>
      <ScrollIndicationText>Réalisations</ScrollIndicationText>
      <ScrollIndicationWrap>
        <ScrollIndicationLine />
      </ScrollIndicationWrap>
    </ScrollIndication>
  );
};
