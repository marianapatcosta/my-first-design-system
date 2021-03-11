import { KEYBOARD_KEYS } from '../constants';
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_KEYS;

export const isEventValid = (event: any) =>
  event.type === 'click' || event.key === SPACE_KEY || event.key === ENTER_KEY;
