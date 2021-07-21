import styled from 'styled-components';

export const InitialWrapper = styled.div<{ isActive: boolean }>`
  section {
    top: 35vh;

    @media(max-width: 768px) {
      top: 27vh;
    }
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


export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;  
  margin-top: 1rem;

  @media(max-width:768px) {
    margin: 1rem auto;
    width: 85%;
  }
`
