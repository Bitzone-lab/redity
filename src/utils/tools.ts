export function __keyNameIndex__(keyName: string, index?: string | number) {
    if (index === undefined) {
        return keyName
    } else {
        return keyName + '__' + index
    }
}
