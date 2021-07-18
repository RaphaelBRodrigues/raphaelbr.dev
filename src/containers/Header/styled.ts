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

  @media(max-width: 768px) {
    flex-direction: column;

    svg {
      position: absolute;
      top: 10%;
    }
  }
`;

