import styled, { css } from 'styled-components';

const getAlternateColorByStep = (step: number) => {
  switch (step) {
    case 0: {
      return '#CA3E47';
    }
    case 1: {
      return 'white';
    }
    case 2: {
      return '#CA3E47';
    }
    case 3: {
      return 'white';
    }
    default: {
      return 'white';
    }
  }
};

const getSolidColorByStep = (step: number) => {
  switch (step) {
    case 0: {
      return '#CA3E47';
    }
    case 1: {
      return 'white';
    }
    case 2: {
      return '#CA3E47';
    }
    case 3: {
      return '#CA3E47';
    }
    default: {
      return 'white';
    }
  }
};

export const LogoWrapper = styled.div<{
  step: number,
  staticMode: boolean
}>`
  position: relative; 
  bottom: 125px;
  transition-duration: stroke 0;
  ${({ staticMode }) => (staticMode
    ? css`
    left: -45px;
    bottom: 80px;
  `
    : css`
    animation: rotate 1 ease-in 9s;
  `)} 

  @keyframes rotate {
    0%{
      transform: rotateY(0deg);
    }
    
    25%{
      transform: rotateY(360deg);
    }
  }

  svg {
      height: 90px;
      width: 90px;
 
      ${({
    step, staticMode,
  }) => (
    css`
              .alternate {
                stroke:  ${staticMode ? '#CA3E47' : getAlternateColorByStep(step)};
              }

              .solid {
                stroke: ${staticMode ? 'white' : getSolidColorByStep(step)};
              }
        `
  )} 
  }
`;
