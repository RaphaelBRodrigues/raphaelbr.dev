import { DontCopy } from '@Styles/styled';
import styled, { css } from 'styled-components'


export const MenuItem = styled.li<{ isSelected: Boolean }>`
  ${DontCopy}
  font-size: ${({ theme }) => theme.font.size.mobile.subtitle};
  font-family: ${({ theme }) => theme.font.family.terciary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  ${({ isSelected }) => isSelected && css`
    color: ${({ theme }) => theme.colors.red};
  `}
`;