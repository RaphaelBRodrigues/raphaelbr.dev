import { DefaultGeneralState } from '@Types/contexts';
import { Action } from '@Types/contexts';


export const INITIAL_STATE: DefaultGeneralState = {

}


export function reducer(state: DefaultGeneralState, { payload, type }: Action) {

  switch (type) {
    default: {
      return state
    }
  }
}