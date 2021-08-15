import { Commit } from '@Types/contexts';
import { GITHUB_API_URL } from '@Constants/index';
import { isMobile } from '@Utils/index';

export async function getCommits() {
  const response = await fetch(GITHUB_API_URL);
  const events = await response.json();

  const pushEvents = events
    .filter((event: { type: string }) => event.type === 'PushEvent');

  const commits = pushEvents.map((pushEvent: { payload: { commits: Commit[] } }) => pushEvent.payload.commits[0]);

  return isMobile() ? commits.slice(0, 25) : commits;
}
