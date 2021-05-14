import createHash from '../src/utils/createHash'
import { __keyNameIndex__, __separator__ } from '../src/utils/tools'

describe('utils', function () {
    it('createHash', function () {
        const hash = createHash()
        expect(typeof hash === 'string').toBeTruthy()
        const o_hash = createHash()
        expect(hash).not.toEqual(o_hash)
    })

    it('__keyNameIndex__', function () {
        const keyName = __keyNameIndex__('key_test', 1)
        expect(keyName).toBe(`key_test${__separator__}1`)
        const oKeyName = __keyNameIndex__('key_other_test')
        expect(oKeyName).toBe('key_other_test')
    })
})
