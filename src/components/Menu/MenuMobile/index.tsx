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
import scrollBody from '@Utils/scroll';

const MenuMobile = () => {
  const navigationDispatch = useNavigationDispatch();
  const { isMenuOpen } = useNavigationContext();

  const handleClick = () => {
    scrollBody(!isMenuOpen);
    navigationDispatch(setMenu(!isMenuOpen));
  };

  return (
    <>
      <S.MenuButton onClick={handleClick} isMenuOpen={isMenuOpen}>
        <i></i>
        <i></i>
        <i></i>
      </S.MenuButton>
      <S.MenuWrapper isMenuOpen={!isMenuOpen}>
        <Logo onClick={handleClick} />
        <MenuItem stepName="initial"> .init()</MenuItem>
        <MenuItem disabled stepName="about">
          .about()
        </MenuItem>
        <MenuItem disabled stepName="skills">
          .skills()
        </MenuItem>
        <MenuItem disabled stepName="contact">
          .contact()
        </MenuItem>
        <S.IconsWrapper>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/raphael-b-rodrigues-08b02889/"
          >
            <Linkedin />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/RaphaelBRodrigues"
          >
            <Github />
          </a>
        </S.IconsWrapper>
      </S.MenuWrapper>
    </>
  );
};

export default MenuMobile;
