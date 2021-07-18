import React from 'react';
import * as S from './styled';

export type StyledButton = {
  outline?: boolean;
  disabled?: boolean;
  captalize?: boolean;
};

type Props = {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  download?: string;
  href?: string;
  target?: string;
} & StyledButton;

const Button: React.FC<Props> = ({ children, href, download, ...props }) => {
  return href ? (
    <S.Link href={href} download={download} {...props}>
      {children}
    </S.Link>
  ) : (
    <S.Button {...props}>{children}</S.Button>
  );
};

export default Button;
