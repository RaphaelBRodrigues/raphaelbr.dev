import React from 'react';
import { setMenu } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import MenuItem from '../components/MenuItem';
import * as S from './styled';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import { ReactComponent as Linkedin } from '@Assets/icons/linkedin.svg';
import { ReactComponent as Github } from '@Assets/icons/github.svg';
// import scrollBody from '@Utils/scroll';

const MenuMobile = () => {
  const navigationDispatch = useNavigationDispatch();
  const { isMenuOpen } = useNavigationContext();

  const handleClick = () => {
    navigationDispatch(setMenu(!isMenuOpen));
  };

  return (
    <>
      <S.MenuButton
        aria-label="menu"
        onClick={handleClick}
        isMenuOpen={isMenuOpen}
      >
        <i></i>
        <i></i>
        <i></i>
      </S.MenuButton>
      <S.MenuWrapper role="menu" isMenuOpen={isMenuOpen}>
        <Logo role="application" onClick={handleClick} />
        <S.MenuList>
          <MenuItem stepName="initial"> .init()</MenuItem>
          <MenuItem stepName="about">.about()</MenuItem>
          <MenuItem disabled stepName="skills">
            .skills()
          </MenuItem>
          <MenuItem disabled stepName="contact">
            .contact()
          </MenuItem>
        </S.MenuList>
        <S.IconsWrapper>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/raphael-b-rodrigues-08b02889/"
          >
            <Linkedin role="application" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/RaphaelBRodrigues"
          >
            <Github role="application" />
          </a>
        </S.IconsWrapper>
      </S.MenuWrapper>
    </>
  );
};

export default MenuMobile;
