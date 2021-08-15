import React, { useReducer } from 'react';
import {
  NavigationContext, NavigationDispatch,
} from './Context';
import {
  INITIAL_STATE, reducer,
} from './duck/reducer';

const NavigationProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <NavigationContext.Provider value={state}>
      <NavigationDispatch.Provider value={dispatch}>
        {children}
      </NavigationDispatch.Provider>
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
