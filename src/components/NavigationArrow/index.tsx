import React from 'react';
import { ReactComponent as ArrowIcon } from '@Assets/icons/arrow.svg';
import { useNavigationDispatch } from '@Hooks/useNavigationContext';
import {
  nextStep, prevStep,
} from '@Contexts/NavigationContext';
import * as S from './styled';
import { ButtonProps } from './types';

const NavigationArrow: React.FC<ButtonProps> = ({
  topArrow, showArrow,
}) => {
  const navigationDispatch = useNavigationDispatch();

  const handleClick = () => {
    if (topArrow) {
      navigationDispatch(prevStep());
    } else {
      navigationDispatch(nextStep());
    }
  };

  return (
    <S.ButtonWrapper
      onClick={handleClick}
      topArrow={topArrow}
      showArrow={showArrow}
    >
      <ArrowIcon />
      <ArrowIcon />
    </S.ButtonWrapper>
  );
};

export default NavigationArrow;
