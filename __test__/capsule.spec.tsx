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

    it('sending Props', function () {
        const keyName = 'KEY_TEST2'
        interface ChildProps {
            name: string
        }

        function ComponentChild(props: ChildProps) {
            expect(props).toMatchObject({
                name: 'Pacheco'
            })
            return <p>{props.name}</p>
        }

        function Component() {
            return (
                <Capsule keyName={keyName} props={{ name: 'Pacheco' }}>
                    {ComponentChild}
                </Capsule>
            )
        }

        mount(<Component />)
        expect(render(keyName)).toBeTruthy()
    })
})
