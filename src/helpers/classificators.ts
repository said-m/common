import { isNumber, isString } from 'lodash';
import { TextInterface } from '../interfaces';

/** Текстом считается строка или число */
export function isText(value: unknown): value is TextInterface {
  return isString(value) || isNumber(value);
}
