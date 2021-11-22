import React from 'react';
import BinaryTable from '@Components/BinaryTable';
import Button from '@Components/Button/';
import Title from '@Components/Title';
import {
  Mobile, NotMobile,
} from '@Components/Responsive';
import { Section } from '@Styles/styled';
import SubTitle from '@Components/SubTitle';
import Text from '@Components/Text';
import { ReactComponent as Logo } from '@Assets/icons/logo.svg';
import { useNavigationDispatch } from '@Hooks/useNavigationContext';
import { setCurrentStep } from '@Contexts/NavigationContext';
import * as S from './styled';

const Initial: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const navigationDispatch = useNavigationDispatch();

  return (
    <S.InitialWrapper isActive={isActive}>
      <Section aria-label="initial">
        <Mobile>
          <Logo onClick={() => navigationDispatch(setCurrentStep('initial'))} />
        </Mobile>

        <NotMobile>
          <BinaryTable />
        </NotMobile>
        <S.DescriptionWrapper>
          <S.TextWrapper>
            <Title>Be Welcome!</Title>
            <SubTitle>My name is Raphael</SubTitle>
            <NotMobile>
              <Text>
                And i'm a curious developer looking forward to work on amazing things,
                if you are looking for someone like that fell free to contact me!
              </Text>
            </NotMobile>
            <Mobile>
              <Text>
                And i'm a curious developer looking forward to
                <br />
                work on amazing things, if you are looking for
                <br />
                someone like that fell free to contact me!
                {/* And this is my personal website, i really */}
                {' '}
                <br />
                {' '}
                {/* hope you enjoy */}
                {/* and undestand */}
                {' '}
                <br />
                {' '}
                {/* a little about me */}
              </Text>
            </Mobile>
          </S.TextWrapper>
          <S.ButtonsWrapper>
            <NotMobile>
              <Button
                target="_blank"
                href="https://raw.githubusercontent.com/RaphaelBRodrigues/raphaelbr.dev/master/RaphaelBarbosaRodrigues.pdf"
                download="RaphaelBRodrigues.pdf"
                aria-label="Download my resume"
                rel="noreferrer"
              >
                Download CV
              </Button>
            </NotMobile>
            <Button
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5511965482567"
              aria-label="Contact me through whatsapp"
              rel="noreferrer"
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
