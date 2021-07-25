import { INITIAL_STATE } from './duck/reducer';
import { DefaultGeneralState } from '@Types/contexts';
import { createContext } from 'react'

export const GeneralContext = createContext<DefaultGeneralState>(INITIAL_STATE);

export const GeneralDispatch = createContext<React.Dispatch<any>>(() => {
  return null;
});