import * as t from './types';
import { DefaultNavigationState, Action } from '@Types/contexts';

export const INITIAL_STATE: DefaultNavigationState = {
  currentStep: "initial"
}

export function reducer(state: DefaultNavigationState, { payload, type }: Action): DefaultNavigationState {

  switch (type) {
    case t.SET_CURRENT_STEP: {
      return {
        ...state,
        currentStep: payload
      };
    }
    default: {
      return state
    }
  }
}
