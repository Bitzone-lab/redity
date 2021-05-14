import '@testing-library/jest-dom'
import React from 'react'
import { useRender, render } from '../src'
import { render as mount, screen } from '@testing-library/react'
import init from './initial.config'

describe('useRender', function () {
    init()
    it('useRender Component', function () {
        const keyName = 'KEY_TEST'
        let count = 0
        function Component() {
            useRender(keyName)
            count++
            return <h1>{count}</h1>
        }

        mount(<Component />)
        expect(render(keyName)).toBeTruthy()
        expect(render('other_key')).toBeFalsy()
        expect(screen.getByText(count)).toBeInTheDocument()
    })
})
