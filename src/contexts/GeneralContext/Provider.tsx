import { GeneralContext, GeneralDispatch } from './Context';
import React, { useEffect, useReducer } from 'react';
import { INITIAL_STATE, reducer } from './duck/reducer';
import { setCommits } from './duck/actions';
import { getCommits } from './duck/utils';

export const GeneralProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const commits = await getCommits();
      dispatch(setCommits(commits));
    })();
  }, []);

  return (
    <GeneralContext.Provider value={state}>
      <GeneralDispatch.Provider value={dispatch}>
        {children}
      </GeneralDispatch.Provider>
    </GeneralContext.Provider>
  );
};
