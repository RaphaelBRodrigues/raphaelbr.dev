import styled from 'styled-components'

export const AboutWrapper = styled.section<{ isActive: boolean }>`
  top: ${({ isActive }) => isActive ? "35vh" : "115vh"};

  position: absolute;
 
  section {
    display: flex; 
  }
`;

export const ContentWrapper = styled.div`
  width: 60%;
`;