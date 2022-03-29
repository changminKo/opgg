import { Observable } from 'rxjs';
import { get } from '@apis/config';
import { IMatches } from '@/models';

export const getServerMatches = (summonerName: string): Observable<IMatches> => get(`/${encodeURIComponent(summonerName)}/matches?hl=ko`);
export const getMatches = (summonerName: string): Promise<IMatches | undefined> => getServerMatches(summonerName).toPromise();
