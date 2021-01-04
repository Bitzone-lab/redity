import React from 'react'
import { act } from 'react-dom/test-utils'
import { connect, getProps, Wrapped } from '../../src'
import { displayDOM } from '../initial.config'

const initRender = displayDOM()

describe('props', function () {
    it('getProps', function (done) {
        const keyName = 'KEY_TEST'
        interface Props {
            name: string
        }

        function Component({ name }: Props) {
            return <h1>{name}</h1>
        }

        const WrapperComponent: Wrapped<Props> = connect(keyName)(Component)

        act(() => {
            initRender(<WrapperComponent name="Juan" />)
            expect(getProps(keyName)).toMatchObject({
                name: 'Juan'
            })
            done()
        })
    })
})
