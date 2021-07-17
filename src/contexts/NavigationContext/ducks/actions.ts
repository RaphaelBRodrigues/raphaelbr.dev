import * as t from './types'

export const setCurrentStep = (payload: String) => ({
  type: t.SET_CURRENT_STEP,
  payload
});
