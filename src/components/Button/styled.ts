import { StyledButton } from './index';
import styled, { css } from 'styled-components';


const ButtonStyle = css`
  background-color: transparent;
  border: 2.5px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.5rem 0 0.6rem;
  width: 15rem;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

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