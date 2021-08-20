import {
  GeneralContext, GeneralDispatch,
} from '@Contexts/GeneralContext';
import { useContext } from 'react';

const useGeneralContext = () => {
  const state = useContext(GeneralContext);

  return state;
};

const useGeneralDispatch = () => {
  const dispatch = useContext(GeneralDispatch);

  return dispatch;
};

export {
  useGeneralContext, useGeneralDispatch,
};
