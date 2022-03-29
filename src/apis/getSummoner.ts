import { Observable } from 'rxjs';
import { get } from '@apis/config';
import { ISummoner } from '@/models';

export const getServerSummoner = (summonerName: string): Observable<ISummoner> => get(`/${encodeURIComponent(summonerName)}`);
// eslint-disable-next-line max-len
export const getSummoner = (summonerName: string): Promise<ISummoner | undefined> => (summonerName !== '' ? getServerSummoner(summonerName).toPromise() : undefined as unknown as Promise<ISummoner | undefined>);
