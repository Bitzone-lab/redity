import store from '../../src/store'
import rendering_types from '../../src/rendering_types'

const { registers } = store()

describe('rendering types', function () {
    it('render', function () {
        const { render } = rendering_types(registers)
        expect(render('key_test')).toBeFalsy()
        expect(render('key_test', '1')).toBeFalsy()
    })

    it('renders', function () {
        const { renders } = rendering_types(registers)
        expect(renders('key_test_2')).toBe(0)
    })
})
