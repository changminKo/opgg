import { Observable } from 'rxjs';
import { itemGet } from '@apis/config';
import { IItems } from '@/models';

export const getServerItemInfo = (): Observable<IItems> => itemGet('/ko_KR/item.json');
export const getItemInfo = (): Promise<IItems | undefined> => getServerItemInfo().toPromise();
