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

  @media(min-width: 768px) {
    position: fixed;
    width: 85%;
  }

  @media(min-width: 1760px) {
     width: 70%;
    left: 10%;
  }
  
  @media(max-width: 768px) {
    flex-direction: column;

    svg {
      position: absolute;
      top: 20%;
    }
  }
`;
