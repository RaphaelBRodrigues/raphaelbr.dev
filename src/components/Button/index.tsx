import React from 'react';
import * as S from './styled';
import { StyledButton } from './types';

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
}) => (href ? (
  <S.Link href={href} download={download} title={title} {...props}>
    {children}
  </S.Link>
) : (
  <S.Button {...props}>{children}</S.Button>
));

Button.defaultProps = {
  children: null,
  onClick: () => {},
  download: 'false',
  title: '',
  href: '#',
  target: '#',
  rel: '',
  props: {},
};

export default Button;
