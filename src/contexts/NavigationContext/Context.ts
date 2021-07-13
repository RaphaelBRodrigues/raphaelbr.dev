import { createContext } from 'react';
import { DefaultNavigationState } from '@Types'
import { INITIAL_STATE } from './ducks/reducer';



export const NavigationContext = createContext<DefaultNavigationState>(INITIAL_STATE);
