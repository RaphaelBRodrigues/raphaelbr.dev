import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  
`;