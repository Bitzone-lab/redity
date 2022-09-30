export const __separator__ = `__$$__`;

export function __keyNameIndex__(keyName, index) {
  if (index === undefined || index === null || index === "") {
    return keyName;
  }
  return keyName + __separator__ + index;
}
