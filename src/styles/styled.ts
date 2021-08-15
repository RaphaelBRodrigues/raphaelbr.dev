import styled, { css } from 'styled-components';

export const DontCopy = css`
  -webkit-tap-highlight-color: transparent;
  
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Section = styled.section`
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
  position: relative;
  transition-timing-function: linear;
  transition-duration: 1s;
  
  @media(max-width:768px) {
    text-align: center;
    transition-duration: 1.5s;
    top: 25vh;
  }
`;
