import React from 'react';

/**
 * Show all children only on mobile devices
 */
const Mobile: React.FC = ({ children }) => {
  if (window.innerWidth >= 768) return null;

  return <>{children}</>;
};

export default Mobile;
