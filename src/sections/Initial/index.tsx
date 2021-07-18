import React from 'react';
import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title';
import * as S from './styled';
import { Mobile, NotMobile } from '@Components/Responsive';

const Initial = () => {
  return (
    <S.InitialWrapper>
      <NotMobile>
        <BinaryTable />
      </NotMobile>
      <S.DescriptionWrapper>
        <S.TextWrapper>
          <Title>Fell Free</Title>
          <S.SubTitle>Hello, be welcome to my website!</S.SubTitle>
          <NotMobile>
            <S.Text>
              But i must explain to you how all this mistaken idea of denouncing
              <br />
              pleasure and praising pain was born and
            </S.Text>
          </NotMobile>
          <Mobile>
            <S.Text>
              But i must explain to you how all this <br /> mistaken idea of
              denouncing pleasure <br /> and praising pain was born and
            </S.Text>
          </Mobile>
        </S.TextWrapper>
        <S.ButtonsWrapper>
          <NotMobile>
            <Button
              target="_blank"
              href="https://raw.githubusercontent.com/RaphaelBRodrigues/raphaelbrodrigues.github.io/master/RaphaelBarbosaRodrigues.pdf"
              download="RaphaelBRodrigues.pdf"
            >
              Download CV
            </Button>
          </NotMobile>
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
