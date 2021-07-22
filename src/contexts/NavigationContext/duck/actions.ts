import * as t from './types'

export const setCurrentStep = (payload: String) => ({
  type: t.SET_CURRENT_STEP,
  payload
});

export const setMenu = (payload: boolean) => ({
  type: t.SET_MENU,
  payload
})

export const nextStep = () => ({
  type: t.NEXT_STEP,
})

export const prevStep = () => ({
  type: t.PREV_STEP,
})

