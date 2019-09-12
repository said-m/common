import { isNumber, isString } from 'lodash';
import { getKeys } from '.';
import { ObjectInterface, TextInterface } from '../interfaces';

/** Текстом считается строка или число */
export function isText(value: unknown): value is TextInterface {
  return isString(value) || isNumber(value);
}

/**
 * Проверяет, является ли значение элементом `Enum`.
 *
 * например:
 * ```ts
 * enum Enum {};
 * const value: string;
 *
 * Enum[value]; // type error;
 *
 * if (isEnumItem(value, Enum)) {
 *   Enum[value]; // ok, `value: Enum`
 * }
 * ```
 */
export const isEnumItem = <
  Enumerable extends ObjectInterface,
  Item extends (string | number)
>(
  item: Item,
  enumerable: Enumerable,
): item is Extract<keyof Enumerable, Item> => getKeys(enumerable).includes(item);
