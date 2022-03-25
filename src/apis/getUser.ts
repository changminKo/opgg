import { Observable } from 'rxjs';
import { get } from '@apis/config';

export const getServerUser = (): Observable<any> => get('');
// eslint-disable-next-line max-len
export const getUser = (): Promise<any> => getServerUser().toPromise();
