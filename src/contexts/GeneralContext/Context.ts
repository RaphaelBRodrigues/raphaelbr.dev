import { DefaultGeneralState } from '@Types/contexts';
import { createContext } from 'react';
import { INITIAL_STATE } from './duck/reducer';

export const GeneralContext = createContext<DefaultGeneralState>(INITIAL_STATE);

export const GeneralDispatch = createContext<React.Dispatch<any>>(() => null);
