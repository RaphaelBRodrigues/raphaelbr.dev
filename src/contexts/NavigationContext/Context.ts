import { DefaultNavigationState } from '@Types/contexts';
import { createContext } from 'react';
import { INITIAL_STATE } from './ducks/reducer';



export const NavigationContext = createContext<DefaultNavigationState>(INITIAL_STATE);
