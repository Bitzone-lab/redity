import '@testing-library/jest-dom'
import React from 'react'
import { render as mount, screen } from '@testing-library/react'
import { useRender, render, connect, renders, useLocal } from '../../src'
import init from '../initial.config'

describe('generate renders', function () {
    init()
    it('render register', function () {
        const keyName = 'KEY_TEST_1'
        const store = {
            name: 'Juan'
        }
        function Component() {
            useRender(keyName)
            return <h1>{store.name}</h1>
        }

        mount(<Component />)
        expect(screen.getByText('Juan')).toBeInTheDocument()

        store.name = 'Miguel'
        render(keyName)
        expect(screen.getByText('Miguel')).toBeInTheDocument()
    })

    it('render a register not exist', function () {
        expect(render('KEY_TEST_NOT_EXITS')).toBeFalsy()
    })

    it('render with index', function () {
        const keyName = 'KEY_TEST_2'
        const index = 1

        function Component() {
            useRender(keyName, index)
            return <h1>Hello</h1>
        }

        mount(<Component />)
        expect(render(keyName)).toBeFalsy()
        expect(render(keyName, index)).toBeTruthy()
        expect(render(keyName, 2)).toBeFalsy()
    })

    it('renders', function () {
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

        mount(<Wrapped />)
        expect(render(keyName)).toBeTruthy()
        expect(render(keyName, index1)).toBeTruthy()
        expect(render(keyName, index2)).toBeTruthy()
        expect(renders(keyName)).toBe(2)
    })

    it('local render', function () {
        function Component() {
            const _render = useLocal()
            expect(typeof _render === 'function').toBeTruthy()
            return <h1>Hello</h1>
        }
        mount(<Component />)
    })

    it('local render with useRender', function () {
        function Component() {
            const _render = useRender()
            expect(typeof _render === 'function').toBeTruthy()
            return <h1>Hello</h1>
        }

        mount(<Component />)
    })
})
