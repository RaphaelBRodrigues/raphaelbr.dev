import React from 'react';
import * as S from './styled';

type Props = {
  handleClick?: Function;
  outline?: Boolean;
  disabled?: Boolean;
  captalize?: Boolean;
};

const Button: React.FC<Props> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
