import React from 'react';
import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title/';
import * as S from './styled';

const Initial = () => {
  return (
    <S.InitialWrapper>
      <BinaryTable />
      <S.DescriptionWrapper>
        <S.TextWrapper>
          <Title>Fell Free</Title>
          <S.SubTitle>Hello, be welcome to my website!</S.SubTitle>
          <S.Text>
            But i must explain to you how all this mistaken idea of denouncing{' '}
            <br />
            pleasure and praising pain was born and
          </S.Text>
        </S.TextWrapper>
        <S.ButtonsWrapper>
          <Button
            target="_blank"
            href="https://raw.githubusercontent.com/RaphaelBRodrigues/raphaelbrodrigues.github.io/master/RaphaelBarbosaRodrigues.pdf"
            download="RaphaelBRodrigues.pdf"
          >
            Download CV
          </Button>
          <Button
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511965482567"
          >
            Contact Me
          </Button>
        </S.ButtonsWrapper>
      </S.DescriptionWrapper>
    </S.InitialWrapper>
  );
};

export default Initial;
