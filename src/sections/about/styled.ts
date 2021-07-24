import styled from 'styled-components';

export const AboutWrapper = styled.section<{ isActive: boolean }>`
  position: absolute;

  @media(max-width: 1760px) {
   width: 100%;
  }

  section {
    top: ${({ isActive }) => (isActive ? '0vh' : '115vh')};
    z-index: ${({ isActive }) => (isActive ? 998 : 2)};
    display: flex;
    margin: 0 auto;
    
    @media(min-width: 1760px) {
      top: ${({ isActive }) => (isActive ? '10vh' : '115vh')};
      width: 70%;
      left: 15%;
    }
    
    @media (max-width: 768px) {
      top: ${({ isActive }) => (isActive ? '-37vh' : '115vh')};
      flex-direction: column;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 60%;

  @media(max-width:768px) {
    margin-top: 5rem;
    width: 100%;
  }
`;
