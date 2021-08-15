import styled from 'styled-components';

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 1rem; 

  @media(max-width:768px) { 
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.font.size.mobile.subtitle}
  }
`;
