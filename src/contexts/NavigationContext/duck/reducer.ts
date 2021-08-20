import {
  DefaultNavigationState, Action,
} from '@Types/contexts';
import { SECTIONS } from '@Constants/index';
import * as t from './types';

export const INITIAL_STATE: DefaultNavigationState = {
  currentStep: 'initial',
  isFirstStep: true,
  isLastStep: false,
  isMenuOpen: false,
};
const sectionsLength = SECTIONS.length;

export function reducer(state: DefaultNavigationState, {
  payload, type,
}: Action): DefaultNavigationState {
  switch (type) {
    case t.SET_CURRENT_STEP: {
      const newStepIndex = SECTIONS.findIndex((section) => section === payload);

      return {
        ...state,
        currentStep: payload,
        isFirstStep: newStepIndex === 0,
        isLastStep: newStepIndex + 1 === sectionsLength,
      };
    }
    case t.NEXT_STEP: {
      const currentStepIndex = SECTIONS.findIndex((section) => section === state.currentStep);
      const nextStepIndex = currentStepIndex + 1;
      const nextStep = SECTIONS[nextStepIndex];

      const isLastStep = sectionsLength === nextStepIndex + 1;

      if (!nextStep) return state;

      return {
        ...state,
        isLastStep,
        currentStep: nextStep,
        isFirstStep: false,
      };
    }

    case t.PREV_STEP: {
      const currentStepIndex = SECTIONS.findIndex((section) => section === state.currentStep);

      const prevStep = SECTIONS[currentStepIndex - 1];

      if (!prevStep) return state;

      return {
        ...state,
        isLastStep: false,
        currentStep: prevStep,
        isFirstStep: prevStep === 'initial',
      };
    }
    case t.SET_MENU:
      return {
        ...state,
        isMenuOpen: payload,
      };
    default: {
      return state;
    }
  }
}
