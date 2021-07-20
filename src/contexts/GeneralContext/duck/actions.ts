import * as t from './types'

const setCommits = (commits: Array<Object>) => ({
  type: t.COMMITS,
  payload: commits
})

export const fetchCommits = () => {

}