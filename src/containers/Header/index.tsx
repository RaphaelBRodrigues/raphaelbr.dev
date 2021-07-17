import React from 'react';
import * as S from './styled';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import MenuItem from './MenuItem';
import { setCurrentStep } from '@Contexts/NavigationContext';
import { useNavigationDispatch } from '@Hooks/useNavigationContext';

const Header: React.FC = () => {
  const navigationDispatch = useNavigationDispatch();
  return (
    <S.Header>
      <Logo onClick={() => navigationDispatch(setCurrentStep('initial'))} />
      <S.MenuWrapper>
        <MenuItem stepName="initial"> .init()</MenuItem>
        <MenuItem stepName="about"> .about()</MenuItem>
        <MenuItem stepName="skills"> .skills()</MenuItem>
        <MenuItem stepName="contact"> .contact()</MenuItem>
      </S.MenuWrapper>
    </S.Header>
  );
};

export default Header;
