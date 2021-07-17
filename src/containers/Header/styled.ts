import styled from 'styled-components'

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem;

  svg {
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  gap: 1.5rem;
`;
