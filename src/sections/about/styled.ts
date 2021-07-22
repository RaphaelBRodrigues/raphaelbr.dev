import styled from 'styled-components';

export const AboutWrapper = styled.section<{ isActive: boolean }>`
  position: absolute;

  section {
    top: ${({ isActive }) => (isActive ? '10vh' : '115vh')};
    display: flex;
    
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
