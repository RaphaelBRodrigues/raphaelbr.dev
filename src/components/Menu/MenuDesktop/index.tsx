import React from 'react';
import MenuItem from '../components/MenuItem';
import * as S from './styled';

const MenuDesktop = () => {
  return (
    <S.MenuWrapper>
      <MenuItem stepName="initial">.init()</MenuItem>
      <MenuItem disabled stepName="about">
        .about()
      </MenuItem>
      <MenuItem disabled stepName="skills">
        .skills()
      </MenuItem>
      <MenuItem disabled stepName="contact">
        .contact()
      </MenuItem>
    </S.MenuWrapper>
  );
};

export default MenuDesktop;
