import {
  useEffect, useState,
} from 'react';

export default (mediaQuery = '(max-width:768px)'): (string | boolean)[] => {
  const [match, setMatch] = useState(false);
  const [media, setMedia] = useState('(max-width: 768px)');

  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQuery);

    const handleChange = () => {
      setMatch(!!matchMedia.matches);
      setMedia(matchMedia.media);
    };

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return [match, media];
};
