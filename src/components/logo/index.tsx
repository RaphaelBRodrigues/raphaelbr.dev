import React, {
  useEffect, useState,
} from 'react';

import { ReactComponent as LogoIcon } from '../../assets/icons/new_logo.svg';

import * as S from './styled';

const Logo: React.FC<{
  staticMode?: boolean
}> = ({ staticMode }) => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogo((index) => {
        if (index > 3) {
          return 0;
        }

        return index + 1;
      });
    }, 500);

    return () => {
      clearInterval(logoInterval);
    };
  });

  return (
    <S.LogoWrapper
      staticMode={!!staticMode}
      step={currentLogo}
    >
      dsad
      <LogoIcon />
    </S.LogoWrapper>
  );
};

Logo.defaultProps = { staticMode: false };

export default Logo;
