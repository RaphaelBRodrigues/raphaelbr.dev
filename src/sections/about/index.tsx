import SubTitle from '@Components/SubTitle';
import Text from '@Components/Text';
import Title from '@Components/Title';
import { Section } from '@Styles/styled';
import React from 'react';
import * as S from './styled';
import { ReactComponent as QuestionIcon } from '@Assets/icons/question_mark.svg';

const About: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <S.AboutWrapper isActive={isActive}>
      <Section aria-label="About">
        <S.ContentWrapper>
          <Title>Who Am I?</Title>
          <SubTitle>So, here i'm...</SubTitle>
          <Text>
            My name is Raphael and i'm a dev! But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system dasdas sadd
          </Text>
        </S.ContentWrapper>
        <QuestionIcon />
      </Section>
    </S.AboutWrapper>
  );
};

export default About;
