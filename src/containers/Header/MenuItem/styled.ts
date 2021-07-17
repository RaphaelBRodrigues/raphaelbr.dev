import styled, { css } from 'styled-components'


export const MenuItem = styled.li<{ isSelected: Boolean }>`
  font-size: ${({ theme }) => theme.font.size.desktop.subtitle};
  cursor: pointer;

  ${({ isSelected }) => isSelected && css`
    color: ${({ theme }) => theme.colors.red}
  `}
`;