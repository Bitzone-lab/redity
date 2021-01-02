import React from 'react'
import { act } from 'react-dom/test-utils'
import Redity, { useRender, render } from '../../src'
import { displayDOM } from '../initial.config'

const initRender = displayDOM()

describe('useRender', function () {
    it('useRender Component', function (done) {
        const keyName = 'KEY_TEST'
        let count = 0
        function Component() {
            useRender(keyName)
            ++count
            return <h1>Hello</h1>
        }

        act(() => {
            initRender(<Component />)
            expect(render(keyName)).toBeTruthy()
            expect(render('other_key')).toBeFalsy()
            expect(count).toBe(1)
            expect(Redity.size()).toBe(1)
            done()
        })
    })
})
