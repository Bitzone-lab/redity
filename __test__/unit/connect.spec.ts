import store from '../../src/store'
import createConnect from '../../src/types/createConnect'

const { registers } = store()

describe('createConnect', function () {
    it('create', function () {
        const connect = createConnect(registers)

        expect(typeof connect('key_test', 1)).toBe('function')
    })
})
