import * as t from './types'

export const setCurrentStep = () => {
  return {
    type: t.SET_CURRENT_STEP,
    payload: 1
  }
}