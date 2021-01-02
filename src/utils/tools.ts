export const __separator__ = `__$$__`

export function __keyNameIndex__(keyName: string, index?: string | number | null) {
    if (index === undefined || index === null || index === '') {
        return keyName
    }
    return keyName + __separator__ + index
}
