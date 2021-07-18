import styled from 'styled-components';

export const InitialWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
  position: relative;
  top: 25vh;
`;

export const DescriptionWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;  
`