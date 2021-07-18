import React from 'react';

/**
 * Show all children in non mobile devices
 */
const NotMobile: React.FC = ({ children }) => {
  if (window.innerWidth <= 768) return null;

  return <>{children}</>;
};

export default NotMobile;
