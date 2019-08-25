
/** Текст может состоять из букв и цифр */
export type TextInterface = string | number;

/** Один элемент или несколько - не важно */
export type CastArrayInterface<T> = T | Array<T>;
