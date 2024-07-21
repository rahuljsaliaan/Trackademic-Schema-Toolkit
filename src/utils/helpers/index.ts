/**
 * Converts a readonly array of strings to a non-empty tuple.
 * Useful for type-safe operations requiring at least one string.
 *
 * @template T - String literal type.
 * @param {ReadonlyArray<T>} arr - Array to convert.
 * @returns {[T, ...T[]]} Non-empty tuple of strings.
 * @throws {Error} If `arr` is empty.
 */
export function toTuple<T extends string>(arr: ReadonlyArray<T>): [T, ...T[]] {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return arr as [T, ...T[]];
}
