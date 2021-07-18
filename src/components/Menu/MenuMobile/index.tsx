import React from 'react';
import MenuItem from '../components/MenuItem';
import * as S from './styled';

const MenuMobile = () => {
  return (
    <S.MenuWrapper>
      MenuMobile
      <MenuItem stepName="initial"> .init()</MenuItem>
      <MenuItem stepName="about"> .about()</MenuItem>
      <MenuItem stepName="skills"> .skills()</MenuItem>
      <MenuItem stepName="contact"> .contact()</MenuItem>
    </S.MenuWrapper>
  );
};

export default MenuMobile;
