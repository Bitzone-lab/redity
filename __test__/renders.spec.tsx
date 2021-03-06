import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render as mount, screen } from '@testing-library/react'
import { useRender, render, renders } from '../src'
import init from './initial.config'

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
            useRender(keyName)
            return (
                <>
                    <Component1 />
                    <Component2 />
                </>
            )
        }

        mount(<MainComponent />)
        expect(render(keyName)).toBeTruthy()
        expect(render(keyName, index1)).toBeTruthy()
        expect(render(keyName, index2)).toBeTruthy()
        expect(renders(keyName)).toBe(2)
    })

    it('multirender', function () {
        function Child1() {
            useRender('child1')
            return <h1>Child1</h1>
        }

        function Child2() {
            useRender('child2')
            return <h1>Child2</h1>
        }

        function Component() {
            return (
                <div>
                    <Child1 />
                    <Child2 />
                </div>
            )
        }
        mount(<Component />)
        expect(render(['child1', 'child2'])).toBeTruthy()
    })

    it('local render with useRender', function () {
        const data = {
            title: 'Creation'
        }
        function Component() {
            const l_render = useRender()
            function handleClick() {
                data.title = 'Edition'
                l_render()
            }
            return <h1 onClick={handleClick}>{data.title}</h1>
        }

        const wrapped = mount(<Component />)
        expect(wrapped.getByText(data.title)).toBeInTheDocument()
        fireEvent.click(wrapped.getByText(data.title))
        expect(wrapped.getByText(data.title)).toBeInTheDocument()
        expect(data.title).toBe('Edition')
    })
})
