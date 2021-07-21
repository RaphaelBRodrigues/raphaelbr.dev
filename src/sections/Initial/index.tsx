import React from 'react';
import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title';
import * as S from './styled';
import { Mobile, NotMobile } from '@Components/Responsive';
import { Section } from '@Styles/styled';
import SubTitle from '@Components/SubTitle';
import Text from '@Components/Text';

const Initial: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <S.InitialWrapper isActive={isActive}>
      <Section aria-label="initial">
        <NotMobile>
          <BinaryTable />
        </NotMobile>
        <S.DescriptionWrapper>
          <S.TextWrapper>
            <Title>Be Welcome!</Title>
            <SubTitle>My name is Raphael</SubTitle>
            <NotMobile>
              <Text>
                And this is my personal website, i really hope you enjoy and
                <br />
                undestand a little about me
              </Text>
            </NotMobile>
            <Mobile>
              <Text>
                And this is my personal website, i really <br /> hope you enjoy
                and undestand <br /> a little about me
              </Text>
            </Mobile>
          </S.TextWrapper>
          <S.ButtonsWrapper>
            <NotMobile>
              <Button
                target="_blank"
                href="https://raw.githubusercontent.com/RaphaelBRodrigues/raphaelbr.dev/master/RaphaelBarbosaRodrigues.pdf"
                download="RaphaelBRodrigues.pdf"
                title="Curriculum"
              >
                Download CV
              </Button>
            </NotMobile>
            <Button
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511965482567"
              title="WhatsApp"
            >
              Contact Me
            </Button>
          </S.ButtonsWrapper>
        </S.DescriptionWrapper>
      </Section>
    </S.InitialWrapper>
  );
};

export default Initial;
