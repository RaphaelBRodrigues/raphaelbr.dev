import SubTitle from '@Components/SubTitle';
import Text from '@Components/Text';
import Title from '@Components/Title';
import { Section } from '@Styles/styled';
import React from 'react';
import * as S from './styled';
import { ReactComponent as QuestionIcon } from '@Assets/icons/question_mark.svg';
import { NotMobile } from '@Components/Responsive';

const About: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <S.AboutWrapper isActive={isActive}>
      <Section aria-label="About">
        <S.ContentWrapper>
          <Title>Who Am I?</Title>
          <SubTitle>Well, i'm a software engineer</SubTitle>
          <Text>
            Studying computer science and with two years of experience in
            software development, i already participated of many ecommerce
            projects working with different technologies either back-end and
            front-end
          </Text>
        </S.ContentWrapper>
        <NotMobile>
          <QuestionIcon />
        </NotMobile>
      </Section>
    </S.AboutWrapper>
  );
};

export default About;
