import { ObjectInterface } from '../interfaces';

/**
 * Типизированный вариант `Object.keys()`,
 * так как стандартная функция всегда возвращает `Array<string>`,
 * вместо того, чтобы вернуть массив из `keyof` входного объекта.
 */
export const getKeys = <
  Input extends ObjectInterface
>(
  value: Input,
): Array<keyof Input> => Object.keys(value);
