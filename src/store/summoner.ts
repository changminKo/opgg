import { atom } from 'recoil';
import { ISummoner } from '@/models';

export const summonerDataStore = atom<ISummoner>({
  key: 'summonerData',
  default: {} as ISummoner,
});
