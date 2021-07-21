import React from 'react';
import * as S from './styled';
import { ReactComponent as ArrowIcon } from '@Assets/icons/arrow.svg';
import { Mobile } from '@Components/Responsive';

export type ButtonProps = {
  topArrow?: boolean;
  showArrow?: boolean;
};

const NavigationArrow: React.FC<ButtonProps> = ({ topArrow, showArrow }) => {
  return (
    <S.ButtonWrapper topArrow={topArrow} showArrow={showArrow}>
      <ArrowIcon />
      {/* <Mobile> */}
      <ArrowIcon />
      {/* </Mobile> */}
    </S.ButtonWrapper>
  );
};

export default NavigationArrow;
