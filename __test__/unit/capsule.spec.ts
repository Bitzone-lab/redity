import store from '../../src/store'
import createCapsule from '../../src/types/createCapsule'

const { registers } = store()

describe('createCapsule', function () {
    it('create', function () {
        const Capsule = createCapsule(registers)
        expect(typeof Capsule === 'function').toBeTruthy()
    })
})
