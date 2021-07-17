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
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`