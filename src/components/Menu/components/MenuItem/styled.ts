import { DontCopy } from '@Styles/styled';
import styled, { css } from 'styled-components';

type StyledMenuItem = {
  isSelected: boolean,
  isDisabled: boolean,
};

export const MenuItem = styled.li<StyledMenuItem>`
  ${DontCopy}
  font-size: ${({ theme }) => theme.font.size.mobile.subtitle};
  font-family: ${({ theme }) => theme.font.family.terciary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.2;

  ${({ isDisabled }) => isDisabled && css`
    opacity: 0.05;
    cursor: default;
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }

   ${({ isSelected }) => isSelected && css`
    color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  `}
`;
