import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.desktop.title};
  font-weight: 500;

 
  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.red};
    height: 3px;
    width: 7%;
    display: block;
  }

  @media(max-width:768px) { 
    font-size: ${({ theme }) => theme.font.size.mobile.title};

    &::after {
      width: 20%;
      position: relative;
      left: 0;
      top: 3px;
      margin: 0 auto;
    }
  }
  
`;
