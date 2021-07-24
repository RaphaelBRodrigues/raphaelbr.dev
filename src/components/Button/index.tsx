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
  title?: string;
  rel?: string;
} & StyledButton;

const Button: React.FC<Props> = ({
  title,
  children,
  href,
  download,
  ...props
}) => {
  return href ? (
    <S.Link href={href} download={download} title={title} {...props}>
      {children}
    </S.Link>
  ) : (
    <S.Button {...props}>{children}</S.Button>
  );
};

export default Button;
