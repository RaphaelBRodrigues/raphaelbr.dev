import styled from "styled-components";

export const BinaryWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
 `;

export const Table = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family.quartenary};
  color: white;
  grid-template-rows: repeat(4,1fr);
  grid-template-columns: repeat(8,1fr);
  font-size: 3rem;
  gap: 0.7rem;
  width: inherit;
`;

export const Item = styled.span<{ highlighted: Boolean }>`
  color: ${({ highlighted, theme }) => highlighted ? theme.colors.red : theme.colors.gray};
  width: min-content;
`;

