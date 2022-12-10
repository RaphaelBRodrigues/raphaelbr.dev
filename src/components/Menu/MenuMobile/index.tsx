import React from 'react';
import { setMenu } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import { ReactComponent as Linkedin } from '@Assets/icons/linkedin.svg';
import { ReactComponent as Github } from '@Assets/icons/github.svg';
import Logo from '@Components/logo';
import * as S from './styled';
import MenuItem from '../components/MenuItem';
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
        <i />
        <i />
        <i />
      </S.MenuButton>
      <S.MenuWrapper isMenuOpen={isMenuOpen}>
        <Logo staticMode />
        <S.MenuList>
          <MenuItem stepName="initial"> .init()</MenuItem>
          <MenuItem disabled stepName="about">.about()</MenuItem>
          <MenuItem disabled stepName="skills">
            .skills()
          </MenuItem>
          <MenuItem disabled stepName="contact">
            .contact()
          </MenuItem>
        </S.MenuList>
        <S.IconsWrapper>
          <a
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/raphael-b-rodrigues-08b02889/"
          >
            <Linkedin role="application" />
          </a>
          <a
            aria-label="Github"
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
