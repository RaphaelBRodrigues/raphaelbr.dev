import { setCurrentStep, setMenu } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import React from 'react';
import * as S from './styled';

type Props = {
  stepName: String;
  disabled?: boolean;
};

const MenuItem: React.FC<Props> = ({ stepName, disabled, children }) => {
  const { currentStep } = useNavigationContext();
  const navigationDispatch = useNavigationDispatch();

  const handleClick = () => {
    if (!disabled) navigationDispatch(setCurrentStep(stepName));
    navigationDispatch(setMenu(false));
  };

  return (
    <S.MenuItem onClick={handleClick} isSelected={stepName === currentStep}>
      {children}
    </S.MenuItem>
  );
};

export default MenuItem;
