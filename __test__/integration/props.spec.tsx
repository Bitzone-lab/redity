import React from 'react'
import { connect, getProps, Wrapped } from '../../src'
import { render as mount } from '@testing-library/react'
import init from '../initial.config'

describe('props', function () {
    init()
    it('getProps', function () {
        const keyName = 'KEY_TEST'
        interface Props {
            name: string
        }

        function Component({ name }: Props) {
            return <h1>{name}</h1>
        }

        const WrapperComponent: Wrapped<Props> = connect(keyName)(Component)

        mount(<WrapperComponent name="Juan" />)
        expect(getProps(keyName)).toMatchObject({
            name: 'Juan'
        })
    })
})
