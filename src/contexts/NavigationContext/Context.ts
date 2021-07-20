import { DefaultNavigationState } from '@Types/contexts';
import { createContext } from 'react';
import { INITIAL_STATE } from './duck/reducer';



const NavigationContext = createContext<DefaultNavigationState>(INITIAL_STATE);

const NavigationDispatch = createContext<React.Dispatch<any>>(() => {
  return null;
});

export { NavigationContext, NavigationDispatch };
