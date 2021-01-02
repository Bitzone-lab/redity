import React from 'react'
import { act } from 'react-dom/test-utils'
import { useRender, render, connect, renders, useLocal } from '../../src'
import { displayDOM } from '../initial.config'

const initRender = displayDOM()

describe('generate renders', function () {
    it('render register', function (done) {
        const keyName = 'KEY_TEST_1'
        function Component() {
            useRender(keyName)
            return <h1>Hello</h1>
        }

        act(() => {
            initRender(<Component />)
            expect(render(keyName)).toBeTruthy()
            done()
        })
    })

    it('render a register not exist', function () {
        expect(render('KEY_TEST_NOT_EXITS')).toBeFalsy()
    })

    it('render with index', function (done) {
        const keyName = 'KEY_TEST_2'
        const index = 1

        function Component() {
            useRender(keyName, index)
            return <h1>Hello</h1>
        }

        act(() => {
            initRender(<Component />)
            expect(render(keyName)).toBeTruthy()
            expect(render(keyName, index)).toBeTruthy()
            expect(render(keyName, 2)).toBeFalsy()
            done()
        })
    })

    it('renders', function (done) {
        const keyName = 'KEY_NAME'
        const index1 = 1
        const index2 = 2

        function Component1() {
            useRender(keyName, index1)
            return <h1>Hello</h1>
        }
        function Component2() {
            useRender(keyName, index2)
            return <h1>Bye</h1>
        }

        function MainComponent() {
            return (
                <>
                    <Component1 />
                    <Component2 />
                </>
            )
        }

        const Wrapped = connect(keyName)(MainComponent)

        act(() => {
            initRender(<Wrapped />)
            expect(render(keyName)).toBeTruthy()
            expect(render(keyName, index1)).toBeTruthy()
            expect(render(keyName, index2)).toBeTruthy()
            expect(renders(keyName)).toBe(2)
            done()
        })
    })

    it('local render', function () {
        function Component() {
            const _render = useLocal()
            expect(typeof _render === 'function').toBeTruthy()
            return <h1>Hello</h1>
        }
        act(() => {
            initRender(<Component />)
        })
    })
})
