import isNumber from 'lodash.isnumber';
import isString from 'lodash.isstring';
import { getKeys } from '.';
import { ObjectInterface, TextInterface } from '../interfaces';

/** Текстом считается строка или число */
export function isText(value: unknown): value is TextInterface {
  return isString(value) || isNumber(value);
}

/**
 * Проверяет, является ли строка ключом в `Enum`-е.
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


/**
 * Проверяет, является ли строка значением в `Enum`-е.
 *
 * например:
 * ```ts
 * enum A {
 *   example = 'EXAMPLE',
 *   test = 'TEST',
 * }
 * var value: string;        // >> `EXAMPLE`
 *
 * const type: A = value;    // type error;
 *
 * if (isEnumValue(value, A)) {
 *   const type: A = value;  // ok; `value: A`
 * }
 * ```
 */
export const isEnumValue = <
  Enumerable extends ObjectInterface,
>(
  value: unknown,
  enumerable: Enumerable,
): value is (
  Extract<
    Enumerable[keyof Enumerable],
    string
  > extends never
  ? Enumerable
  : Extract<
    Enumerable[keyof Enumerable],
    string
  >
) => Object.values(enumerable).includes(value);
