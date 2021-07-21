import React from 'react';
import Initial from '@Sections/Initial';
import About from '@Sections/about';
import { useNavigationContext } from '@Hooks/useNavigationContext';
import NavigationArrow from '@Components/NavigationArrow';

const Navigation = () => {
  const { currentStep, isFirstStep, isLastStep } = useNavigationContext();

  return (
    <>
      <NavigationArrow topArrow showArrow={!isFirstStep} />
      <Initial isActive={currentStep === 'initial'} />
      {/* <About isActive={currentStep === 'about'} /> */}
      <NavigationArrow showArrow={!isLastStep} />
    </>
  );
};

export default Navigation;
