import { createBrowserHistory } from 'history';

export const historyStore = createBrowserHistory();

export const historyPush = (url: string, state?: any) => historyStore.push(url, state);
