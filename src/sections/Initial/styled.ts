import styled from 'styled-components';

export const InitialWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
  position: relative;
  top: 20vh;
  
  @media(max-width:768px) {
    text-align: center;
    top: 25vh;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -0.5rem;

  @media(max-width:768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div``;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 1rem; 

  @media(max-width:768px) { 
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.font.size.mobile.subtitle}
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media(max-width:768px) {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.font.size.mobile.text};
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;  
  margin-top: 1rem;

  @media(max-width:768px) {
    margin: 1rem auto;
    width: 85%;
  }
`