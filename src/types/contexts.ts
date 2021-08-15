export type DefaultNavigationState = {
  currentStep: string,
  isLastStep: boolean,
  isFirstStep: boolean,
  isMenuOpen: boolean,
};

export type Commit = {
  message: string,
  sha: string
};

export type DefaultGeneralState = {
  commits: Commit[]
};

export type Action = {
  payload: any,
  type: string
};
