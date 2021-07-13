import React, { useReducer } from 'react';
import { NavigationContext } from './Context';
import { INITIAL_STATE, reducer } from './ducks/reducer';

const NavigationProvider: React.FC = ({ children }) => {
  const [state] = useReducer(reducer, INITIAL_STATE);

  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
