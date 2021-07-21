import { DontCopy } from '@Styles/styled';
import styled, { css } from 'styled-components';

export const MenuWrapper = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: ${({ isMenuOpen }) => isMenuOpen ? 0 : '-120vw'};
  top: 0;
  margin: 0;
  padding: 4rem 0;
  z-index: 999;
  transition: left 1s;
  overflow-y: hidden;
  gap: 2rem;
  justify-content: center;
  
  background-color: rgba(0,0,0,0.99);
  width: 100%;
  text-align: center;
  height: 100%;

  >svg {
    width: 100%;
    top: 17%;
  }
`;

export const MenuButton = styled.button<{ isMenuOpen: boolean }>`
  ${DontCopy}
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: 0;
  position: absolute;
  left: 5vw;
  z-index: 1000;

  i {
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 3px;
    width: 2.5rem;
    height: 2px;
    margin: 1.5px 0;
    transition-duration: 0.6s;
    opacity: 1;
  }

  ${({ isMenuOpen }) => {
    return (
      isMenuOpen &&
      css`
        i {
          position: absolute;
          transition: opacity 3s, transform 1s ;
          opacity: 1;

          &:nth-child(1) {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      `
    );
  }}
`;

export const IconsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  bottom: 3rem;

  a {
    width: 25%;

    svg {
      display: block;
      width: 25%;
      height: 25%;
      opacity: 1;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`