import { setCurrentStep } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import React from 'react';
import * as S from './styled';

type Props = {
  stepName: String;
};

const MenuItem: React.FC<Props> = ({ stepName, children }) => {
  const { currentStep } = useNavigationContext();
  const navigationDispatch = useNavigationDispatch();

  const handleClick = () => {
    navigationDispatch(setCurrentStep(stepName));
  };

  return (
    <S.MenuItem onClick={handleClick} isSelected={stepName === currentStep}>
      {children}
    </S.MenuItem>
  );
};

export default MenuItem;
