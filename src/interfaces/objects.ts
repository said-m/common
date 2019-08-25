
/** Рекурсивный `Partial` */
export type PartialDeep<Obj> = {
  [Key in keyof Obj]?: PartialDeep<Obj[Key]>;
};

/** Объект. Лень каждый раз писать это */
// tslint:disable-next-line: interface-over-type-literal
export type ObjectInterface<
  Value = unknown,
> = {
  [key: string]: Value,
};

/** Расширение интерфейса всех объектов внутри объекта */
export type ApplyDeepInterface<
  RootObject, ExtendObject
> = RootObject extends Array<infer U>
// если массив
? ApplyDeepArrayInterface<U, ExtendObject>
// не массив
: (
  RootObject extends ObjectInterface
  // если объект
  ? (
    Partial<ExtendObject> & {
      [RootKey in keyof RootObject]: ApplyDeepInterface<
        RootObject[RootKey], ExtendObject
      >
    }
  )
  // если не массив и не объект
  : RootObject
);
/** Расширение интерфейса всех объектов внутри массива из объектов */
interface ApplyDeepArrayInterface<Extendable, Addend>
extends Array<ApplyDeepInterface<Extendable, Addend>> {}
