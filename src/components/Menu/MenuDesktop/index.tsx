import {
  GITHUB_URL, LINKEDIN_URL,
} from '@Constants/index';
import React from 'react';
import MenuItem from '../components/MenuItem';
import * as S from './styled';

const MenuDesktop = () => (
  <S.MenuWrapper>
    <MenuItem stepName="initial">.init()</MenuItem>
    <MenuItem
      href={GITHUB_URL}
      stepName="github"
    >
      .github()

    </MenuItem>
    <MenuItem
      href={LINKEDIN_URL}
      stepName="linkedin"
    >
      .linkedin()
    </MenuItem>
    <MenuItem stepName="email">
      .email()
    </MenuItem>
  </S.MenuWrapper>
);

export default MenuDesktop;
