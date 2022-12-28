export function toRecord<T, TId extends number | string>(
  list: T[],
  getId: (t: T) => TId
) {
  return list.reduce((c, i) => {
    c[getId(i)] = i;
    return c;
  }, {} as Record<TId, T>);
}

export function createArray<T>(length: number, getter: (i: number) => T) {
  return Array.from<unknown, T>({ length }, (_, i) => getter(i));
}

export function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

export function sum(a: number, b: number) {
  return a + b;
}
