import lodashIsPlainObject from 'lodash.isplainobject';
import { ObjectInterface } from '../interfaces';

/**
 * В Lodash проверка на объект возвращает булево,
 * т.е. если делать if, то ide принимает object за boolean
 */
export function isPlainObject(value: unknown): value is ObjectInterface {
  return lodashIsPlainObject(value);
}

/** Lodash в текущей версии возвращает any[], хотя появился unknown */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}
