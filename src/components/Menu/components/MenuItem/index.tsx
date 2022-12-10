import {
  setCurrentStep, setMenu,
} from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';
import React from 'react';
import * as S from './styled';

type Props = {
  stepName: String;
  disabled?: boolean;
  href?: string;
};

const MenuItem: React.FC<Props> = ({
  stepName,
  disabled = false,
  children,
  href,
}) => {
  const { currentStep } = useNavigationContext();
  const navigationDispatch = useNavigationDispatch();

  const handleClick = () => {
    if (!disabled) navigationDispatch(setCurrentStep(stepName));
    navigationDispatch(setMenu(false));
  };

  return (
    <S.MenuItem
      data-testid={stepName}
      onClick={handleClick}
      isSelected={stepName === currentStep}
      isDisabled={disabled}
    >
      <a href={href}>
        {children}
      </a>
    </S.MenuItem>
  );
};

MenuItem.defaultProps = {
  disabled: false,
  href: '#',
};

export default MenuItem;
