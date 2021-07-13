import React from 'react';
import { NavigationContext } from './Context';

const NavigationProvider: React.FC = ({ children }) => {
  const state = {
    teste: 'Teste',
  };
  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
