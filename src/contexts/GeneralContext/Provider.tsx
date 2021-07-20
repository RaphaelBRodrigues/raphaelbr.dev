import { GeneralContext, GeneralDispatch } from './Context';
import React, { useReducer } from 'react';
import { INITIAL_STATE, reducer } from './duck/reducer';

export const GeneralProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GeneralContext.Provider value={state}>
      <GeneralDispatch.Provider value={dispatch}>
        {children}
      </GeneralDispatch.Provider>
    </GeneralContext.Provider>
  );
};
