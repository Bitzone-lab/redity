import React from 'react'
import { act } from 'react-dom/test-utils'
import Redity, { connect, render } from '../../src'
import { displayDOM } from '../initial.config'

const initRender = displayDOM()

describe('connect', function () {
    it('connecting component', function (done) {
        const keyName = 'KEY_TEST'
        let count = 0
        function Component() {
            ++count
            return <h1>Hello</h1>
        }

        expect(Redity.size()).toBe(0)
        const WrapperComponent = connect(keyName)(Component)

        act(() => {
            initRender(<WrapperComponent />)
            expect(render(keyName)).toBeTruthy()
            expect(render('other_key')).toBeFalsy()
            expect(count).toBe(1)
            expect(Redity.size()).toBe(1)
            done()
        })
    })
})
