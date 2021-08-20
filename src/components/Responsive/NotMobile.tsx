import useMediaQuery from '@Hooks/useMediaQuery';
import React from 'react';

/**
 * Show all children in non mobile devices
 */
const NotMobile: React.FC = ({ children }) => {
  const [match] = useMediaQuery('(min-width: 768px)');

  if (!match) return null;

  return <>{children}</>;
};

export default NotMobile;
