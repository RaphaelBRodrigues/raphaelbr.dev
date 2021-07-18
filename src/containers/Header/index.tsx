import React from 'react';
import * as S from './styled';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import { setCurrentStep } from '@Contexts/NavigationContext';
import { useNavigationDispatch } from '@Hooks/useNavigationContext';
import { Mobile, NotMobile } from '@Components/Responsive';
import { MenuDesktop } from '@Components/Menu';

const Header: React.FC = () => {
  const navigationDispatch = useNavigationDispatch();
  return (
    <S.Header>
      <Logo onClick={() => navigationDispatch(setCurrentStep('initial'))} />
      <NotMobile>
        <MenuDesktop />
      </NotMobile>
      <Mobile>{/* <MenuMobile /> */}</Mobile>
    </S.Header>
  );
};

export default Header;
