import React from 'react';
import { setMenu } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import MenuItem from '../components/MenuItem';
import * as S from './styled';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
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
      <S.MenuWrapper isMenuOpen={isMenuOpen}>
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
      </S.MenuWrapper>
    </>
  );
};

export default MenuMobile;
