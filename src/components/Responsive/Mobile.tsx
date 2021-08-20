import useMediaQuery from '@Hooks/useMediaQuery';
import React from 'react';

/**
 * Show all children only on mobile devices
 */
const Mobile: React.FC = ({ children }) => {
  const [match] = useMediaQuery('(max-width: 768px)');

  if (!match) return null;

  return <>{children}</>;
};

export default Mobile;
