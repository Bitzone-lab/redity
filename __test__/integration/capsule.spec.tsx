import React from 'react'
import { Capsule, render, size } from '../../src'
import { render as mount } from '@testing-library/react'
import init from '../initial.config'

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
        expect(size()).toBe(1)
    })

    it('sending Props', function () {
        const keyName = 'KEY_TEST2'
        interface Props {
            name: string
        }

        function Children(props: Props) {
            expect(props).toMatchObject({
                name: 'Pacheco'
            })
            return <p>{props.name}</p>
        }

        function Component() {
            return (
                <Capsule keyName={keyName} props={{ name: 'Pacheco' }}>
                    {Children}
                </Capsule>
            )
        }

        mount(<Component />)
        expect(render(keyName)).toBeTruthy()
    })
})
