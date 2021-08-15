import React from 'react';
import { setCurrentStep } from '@Contexts/NavigationContext';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import { useNavigationDispatch } from '@Hooks/useNavigationContext';
import {
  Mobile, NotMobile,
} from '@Components/Responsive';
import {
  MenuDesktop, MenuMobile,
} from '@Components/Menu';
import * as S from './styled';

const Header: React.FC = () => {
  const navigationDispatch = useNavigationDispatch();
  return (
    <S.Header>
      <NotMobile>
        <Logo onClick={() => navigationDispatch(setCurrentStep('initial'))} />
        <MenuDesktop />
      </NotMobile>
      <Mobile>
        <MenuMobile />
      </Mobile>
    </S.Header>
  );
};

export default Header;
