import React from 'react';
import { useGeneralContext } from '@Hooks/useGeneralContext';
import * as S from './styled';

const FloatingCommits = () => {
  const { commits } = useGeneralContext();

  return (
    <S.FloatingCommitsWrapper>
      {commits.map(({
        message, sha,
      }, index) => (
        <S.Commit key={sha} index={index}>
          {sha.slice(0, 6)}
          {' '}
          |
          {message}
        </S.Commit>
      ))}
    </S.FloatingCommitsWrapper>
  );
};

export default FloatingCommits;
