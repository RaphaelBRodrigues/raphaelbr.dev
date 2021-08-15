import styled, {
  css, keyframes,
} from 'styled-components';
import { DontCopy } from '../../styles/styled';
import { ButtonProps } from './index';

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
  width: 100%;
  z-index: 998;
  ${DontCopy}

  svg {
    &:nth-child(1) {
      bottom: -0.8rem;
      animation: 1s ${movementArrow} infinite;
    }

    height: 1.5rem;
    left: 50%;
    position: absolute;
  }

  cursor: ${({ showArrow }) => (showArrow ? 'pointer' : 'inherit')};

  @media (max-width: 768px) {
    opacity: ${({ showArrow }) => (showArrow ? 1 : 0)};
  }

  ${({ topArrow }) => (topArrow
    ? css`
          svg {
            transform: rotate(270deg);
            left: 42%;
          }
        `
    : css`
          bottom: 2.5rem;
          svg {
            transform: translateX(-50%) rotate(90deg);
          }
        `)}

  @media(min-width: 768px) {
    bottom: 3rem;
    left: 2rem;
  }
`;
