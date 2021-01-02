import store from '../../src/store'
import createUseRender from '../../src/types/createUseRender'

describe('useRender', function () {
    const { registers } = store()
    it('create', function () {
        const useRender = createUseRender(registers)
        expect(typeof useRender).toBe('function')
    })
})
