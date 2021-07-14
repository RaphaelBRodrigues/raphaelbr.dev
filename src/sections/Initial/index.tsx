import React, { useEffect } from 'react';
import { setCurrentStep } from '@Contexts/NavigationContext';
import {
  useNavigationContext,
  useNavigationDispatch,
} from '@Hooks/useNavigationContext';

const Initial = () => {
  const state = useNavigationContext();
  const navigationDispatch = useNavigationDispatch();

  useEffect(() => {
    navigationDispatch(setCurrentStep(1));
  }, [navigationDispatch]);

  return <div>{state.currentStep}</div>;
};

export default Initial;
