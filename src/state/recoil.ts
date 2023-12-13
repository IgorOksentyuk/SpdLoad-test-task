import { atom } from 'recoil';
import { Rocket } from '../interfaces/Rocket.ts';

export const favoriteCardsState = atom<Rocket[]>({
  key: 'favoriteCardsState',
  default: [] as Rocket[],
});
