/**
 * 文字列をリテラル型に限定する汎用パーサー
 */
export function parseLiteral<T extends string>(
  value: unknown,
  validValues: readonly T[],
): T | undefined {
  return typeof value === "string" && validValues.includes(value as T)
    ? (value as T)
    : undefined;
}
