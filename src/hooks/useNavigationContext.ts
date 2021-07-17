import { NavigationContext, NavigationDispatch } from '@Contexts/NavigationContext';
import { useContext } from 'react';


const useNavigationContext = () => {
  const state = useContext(NavigationContext);

  return state;
};

const useNavigationDispatch = () => {
  const dispatch = useContext(NavigationDispatch);

  return dispatch;
}



export { useNavigationContext, useNavigationDispatch };

