import React from 'react';
import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title';
import * as S from './styled';
import { Mobile, NotMobile } from '@Components/Responsive';
import FloatingCommits from '@Containers/FloatingCommits';

const Initial = () => {
  return (
    <S.InitialWrapper>
      <FloatingCommits />
      <NotMobile>
        <BinaryTable />
      </NotMobile>
      <S.DescriptionWrapper>
        <S.TextWrapper>
          <Title>Be Welcome!</Title>
          <S.SubTitle>My name is Raphael</S.SubTitle>
          <NotMobile>
            <S.Text>
              And this is my personal website, i really hope you enjoy and
              undestand
              <br />a little about me
            </S.Text>
          </NotMobile>
          <Mobile>
            <S.Text>
              And this is my personal website, i really <br /> hope you enjoy
              and undestand <br /> a little about me
            </S.Text>
          </Mobile>
        </S.TextWrapper>
        <S.ButtonsWrapper>
          <NotMobile>
            <Button
              target="_blank"
              href="https://raw.githubusercontent.com/RaphaelBRodrigues/raphaelbr.dev/master/RaphaelBarbosaRodrigues.pdf"
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
