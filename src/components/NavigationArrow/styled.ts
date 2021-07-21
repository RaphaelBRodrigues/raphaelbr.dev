import { ButtonProps } from './index';
import styled, { css, keyframes } from 'styled-components';

const movementArrow = keyframes`
  0%{
    bottom: -0.8rem;
  }

  50%{
    bottom: -1rem;
  }

  75%{
    bottom: -0.9rem;
  }

  100%{
    bottom: -0.8rem;
  }
`;


export const ButtonWrapper = styled.div<ButtonProps>`
  position: absolute;
  opacity: ${({ showArrow }) => showArrow ? 1 : 0};

  ${({ topArrow }) => {
    return topArrow ?
      css`
      background-color: green;
    `
      : css`
      svg {
        &:nth-child(1) {
          bottom: -0.8rem;
          animation: 1s ${movementArrow} infinite;
        }

        height: 1.5rem;
        transform: translateX(-50%) rotate(90deg);
        left: 50%;
        position: absolute;
      }
      bottom: 2.5rem;
      width: 100%;
    `
  }}
`;