import * as t from './types';

export const setCommits = (commits: any) => ({
  type: t.COMMITS,
  payload: commits,
});
