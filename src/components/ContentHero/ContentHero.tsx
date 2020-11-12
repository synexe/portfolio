import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TextCodeH1Component } from '../TextCode/TextCodeH1';
import ImageMark from '../../assets/images/mark-without-background.png';

const ContentHero = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const FadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 }
`;

const ContentHeroDetails = styled.div``;

const ContentHeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ContentHeroTitle = styled.h1`
  color: #ffffff;
  font-family: 'Myariad Pro', sans-serif;
  font-size: 42px;
  line-height: 1.3;
`;

const ContentHeroAnimationLetter = keyframes`
  0%, 100%, 20%, 40%, 60%, 80% {
    transition-timing-function: cubic-bezier(.215, .61, .355, 1);
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(.9, .9, .9);
  } 
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(.97, .97, .97);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const ContentHeroTitleLetter = styled.span`
  animation-fill-mode: both;
  animation-name: ${ContentHeroAnimationLetter};
  animation-duration: 0.75s;
`;

const ContentHeroSubtitle = styled.span`
  color: #8d8d8d;
  font-family: 'Consolas', sans-serif;
  font-size: 18px;
  opacity: 0;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
`;

const ContentBackgroundMark = styled.div``;

const ContentMarkImage = styled.img`
  user-select: none;
  animation: ${FadeInAnimation} 0.6s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode: both;
  width: auto;
`;

export const ContentHeroComponent = (): JSX.Element => {
  const dataTitle = 'Bonjour,je suis Téo,développeur web.';

  return (
    <ContentHero>
      <ContentHeroDetails>
        <ContentHeroTitleWrapper>
          <TextCodeH1Component class="code-h1-start" />
          <ContentHeroTitle>
            {dataTitle.split('').map((letter, index) => {
              return (
                <ContentHeroTitleLetter key={index} style={{ animationDelay: `${index * 40}ms` }}>
                  {letter}
                  {letter === ',' && <br />}
                </ContentHeroTitleLetter>
              );
            })}
          </ContentHeroTitle>
          <TextCodeH1Component class="code-h1-end" />
        </ContentHeroTitleWrapper>
        <ContentHeroSubtitle>FullStack / Architecte / DevOps</ContentHeroSubtitle>
      </ContentHeroDetails>
      <ContentBackgroundMark>
        <ContentMarkImage src={ImageMark} />
      </ContentBackgroundMark>
    </ContentHero>
  );
};
