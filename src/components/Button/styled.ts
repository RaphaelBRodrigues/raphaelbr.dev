import { DontCopy } from '@Styles/styled';
import { StyledButton } from './index';
import styled, { css } from 'styled-components';


const ButtonStyle = css`
  ${DontCopy} 
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.5rem 0 0.6rem;
  width: 15rem;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  position: relative;  
  
  &:before {
    transition-duration: 0.6s;
    content: "";
    display: block;
    width: 25%;
    height: 200%;
    transform: rotate(-45deg);
    top: 0;
    left: -45%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:hover {
    color: white;
    &:before {
      left: -15%;
    }
  }


  @media(max-width:768px) {
    width: 100%;
  }
`
export const Button = styled.button<StyledButton>`
  ${ButtonStyle}
`;

export const Link = styled.a<StyledButton>`
  ${ButtonStyle}
`;