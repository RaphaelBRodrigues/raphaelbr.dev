import * as t from './types'

export const setCurrentStep = (payload: Number) => ({
  type: t.SET_CURRENT_STEP,
  payload
});
