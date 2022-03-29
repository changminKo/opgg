import { atom } from 'recoil';
import { IItems } from '@/models';

export const itemsDataStore = atom<IItems>({
  key: 'itemsData',
  default: {} as IItems,
});
