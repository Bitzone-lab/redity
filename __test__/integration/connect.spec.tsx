import '@testing-library/jest-dom'
import React from 'react'
import Redity, { connect, render } from '../../src'
import { render as mount, screen } from '@testing-library/react'
import init from '../initial.config'

describe('connect', function () {
    init()
    it('connecting component', function () {
        const keyName = 'KEY_TEST'
        let count = 0
        function Component() {
            count++
            return <h1>{count}</h1>
        }

        expect(Redity.size()).toBe(0)
        const WrapperComponent = connect(keyName)(Component)

        mount(<WrapperComponent />)
        expect(render(keyName)).toBeTruthy()
        expect(render('other_key')).toBeFalsy()
        expect(screen.getByText(count)).toBeInTheDocument()
        expect(Redity.size()).toBe(1)
    })

    it('connecting component with props', function () {
        const keyName = 'KEY_TEST'
        interface Props {
            name: string
        }

        function Component({ name }: Props) {
            expect(name).toBe('Juan')
            return <h1>{name}</h1>
        }
        const WrapperComponent = connect(keyName)(Component)

        mount(<WrapperComponent name="Juan" />)
        expect(render(keyName)).toBeTruthy()
    })
})
