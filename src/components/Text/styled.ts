import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media(max-width:768px) {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.font.size.mobile.text};
    width: 100%;
  }
`;
