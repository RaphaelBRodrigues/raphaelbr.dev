import styled from 'styled-components';

export const InitialWrapper = styled.div<{ isActive: boolean }>`
  section {
     top: ${({ isActive }) => isActive ? "35vh" : "115vh"};
     z-index: ${({ isActive }) => (isActive ? 998 : 2)};
 
     
     @media(max-width: 768px) {
      top: ${({ isActive }) => isActive ? "25vh" : "115vh"};
      flex-direction: column;
  
      svg {
        position: absolute;
        top: -35%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;


export const DescriptionWrapper = styled.div`
  width: 50%;
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
