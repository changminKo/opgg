import { Observable } from 'rxjs';
import { get } from '@apis/config';
import { IMatchDetail } from '@/models';

export const getServerMatchDetail = (summonerName: string, gameId: string): Observable<IMatchDetail> => get(`/${encodeURIComponent(summonerName)}/matchDetail/${gameId}/?hl=ko`);
export const getMatchDetail = (summonerName: string, gameId: string): Promise<IMatchDetail | undefined> => getServerMatchDetail(summonerName, gameId).toPromise();
