import React from 'react';
import styled from 'styled-components';
import ImageMark from '../../assets/images/mark-without-background.png';

const Header = styled.div`
  height: 70px;
  width: 100%;
  user-select: none;
`;

const HeaderInner = styled.div`
  height: 100%;
  margin: 0 100px;
  display: flex;
  align-items: flex-end;
`;

const HeaderMark = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

const HeaderMarkImage = styled.img`
  height: 100%;
`;

const HeaderMarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderMarkText = styled.span`
  font-family: 'Myriad Pro', sans-refix;
  font-size: 18px;
  text-transform: uppercase;
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: auto;
`;

const HeaderNavigationItem = styled.div`
  padding: 0 20px;
  cursor: pointer;
`;

const HeaderNavigationtext = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #181818;
  font-size: 20px;
`;

export const HeaderComponent = (): JSX.Element => {
  return (
    <Header>
      <HeaderInner>
        <HeaderMark>
          <HeaderMarkImage src={ImageMark} />
          <HeaderMarkWrapper>
            <HeaderMarkText>Téo</HeaderMarkText>
            <HeaderMarkText>Marchand</HeaderMarkText>
          </HeaderMarkWrapper>
        </HeaderMark>
        <HeaderNavigation>
          <HeaderNavigationItem>
            <HeaderNavigationtext>À propos</HeaderNavigationtext>
          </HeaderNavigationItem>
          <HeaderNavigationItem>
            <HeaderNavigationtext>Compétences</HeaderNavigationtext>
          </HeaderNavigationItem>
          <HeaderNavigationItem>
            <HeaderNavigationtext>Contact</HeaderNavigationtext>
          </HeaderNavigationItem>
        </HeaderNavigation>
      </HeaderInner>
    </Header>
  );
};
