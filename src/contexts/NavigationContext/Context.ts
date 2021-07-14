import { DefaultNavigationState } from '@Types/contexts';
import { createContext } from 'react';
import { INITIAL_STATE } from './ducks/reducer';



const NavigationContext = createContext<DefaultNavigationState>(INITIAL_STATE);

const NavigationDispatch = createContext<React.Dispatch<any>>(() => {
  console.log("create");
  return null;
});

export { NavigationContext, NavigationDispatch };
