import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title/';
import React from 'react';
import * as S from './styled';

const Initial = () => {
  return (
    <S.InitialWrapper>
      <BinaryTable />
      <S.DescriptionWrapper>
        <Title>Fell Free</Title>
        <S.SubTitle>Hello, be welcome to my website!</S.SubTitle>
        <S.Text>
          But i must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and
        </S.Text>
        <S.ButtonsWrapper>
          <Button>Download CV</Button>
          <Button>Contact Me</Button>
        </S.ButtonsWrapper>
      </S.DescriptionWrapper>
    </S.InitialWrapper>
  );
};

export default Initial;
