import React from 'react'
import { Capsule, render } from '../src'
import { render as mount } from '@testing-library/react'
import init from './initial.config'

describe('capsule', function () {
    init()
    it('Capsule Component', function () {
        const keyName = 'KEY_TEST'
        const store = {
            title: 'Hello'
        }

        function Component() {
            return <Capsule keyName={keyName}>{() => <h1>{store.title}</h1>}</Capsule>
        }

        mount(<Component />)
        expect(render(keyName)).toBeTruthy()
        expect(render('other_key')).toBeFalsy()
    })
})
