import { atom } from 'recoil';

export const positionStore = atom<string>({
  key: 'positionStore',
  default: '',
});
