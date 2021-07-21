import { DontCopy } from '@Styles/styled';
import styled, { keyframes } from 'styled-components';

const floatingText = (index: number) => keyframes`
  0% {
    opacity: 0.2;
    transform: rotate(${index * Math.random() > 0.5 ? -1 : 1}deg);
    bottom: -${(Math.random() * index) * 8}%;
    
    @media(max-width: 768px) {
      bottom: -${(Math.random() * index) * 2 + 30}%;
    }
  }
  25% {
    opacity: 0.3;
    transform: rotate(${index * Math.random() > 0.5 ? -1.5 : 1}deg);
  }
  50% {
    opacity: 0.7;
    transform: rotate(${index * Math.random() > 0.5 ? -1 : 1.5}deg);
  }
  75% {
    opacity: 0.5;
    transform: rotate(${index * Math.random() > 0.5 ? -1 : 1}deg);
  }
  100% {
    opacity: 0;
    transform: rotate(${index * Math.random() > 0.5 ? -1.5 : 1.5}deg);
    bottom: 100%;

    @media(max-width: 768px) {
      background-color: yellow;
      bottom: -${(Math.random() * 10) * 2 + 140}%;
    }
  }
`;

export const FloatingCommitsWrapper = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  top: -5vh;
  width: 100%;
  height: 100vh;
`;

export const Commit = styled.span<{ index: number }>`
  ${DontCopy}
  opacity: 0;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.7rem;
  display: block;
  white-space: nowrap;
  left: ${() => `${Math.random() * (100 - 10 + 1) + 5}vw`};
  position: absolute;
  animation: 120s ${({ index }) => floatingText(index)} infinite linear;
  margin: 8rem 0;
  padding: 24rem 0;
  
  @media(max-width: 768px) {
    animation-duration: 80s;
    left: ${() => `${Math.random() * (80 - 10 + 1) + 5}vw`};
    margin: 8rem 0;
    padding: 16rem 0;
  }
`;
