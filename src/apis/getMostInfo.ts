import { Observable } from 'rxjs';
import { get } from '@apis/config';
import { IMostInfo } from '@/models';

export const getServerMostInfo = (summonerName: string): Observable<IMostInfo> => get(`/${encodeURIComponent(summonerName)}/mostInfo?hl=ko`);
export const getMostInfo = (summonerName: string): Promise<IMostInfo | undefined> => getServerMostInfo(summonerName).toPromise();
