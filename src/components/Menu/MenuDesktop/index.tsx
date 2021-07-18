import React from 'react';
import MenuItem from '../components/MenuItem';
import * as S from './styled';

const MenuDesktop = () => {
  return (
    <S.MenuWrapper>
      <MenuItem stepName="initial"> .init()</MenuItem>
      <MenuItem stepName="about"> .about()</MenuItem>
      <MenuItem stepName="skills"> .skills()</MenuItem>
      <MenuItem stepName="contact"> .contact()</MenuItem>
    </S.MenuWrapper>
  );
};

export default MenuDesktop;
