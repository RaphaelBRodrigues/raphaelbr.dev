import {
  DefaultGeneralState, Action,
} from '@Types/contexts';

import * as t from './types';

export const INITIAL_STATE: DefaultGeneralState = { commits: [] };

export function reducer(state: DefaultGeneralState, {
  payload, type,
}: Action) {
  switch (type) {
    case t.COMMITS: {
      return {
        ...state,
        commits: payload,
      };
    }
    default: {
      return state;
    }
  }
}
