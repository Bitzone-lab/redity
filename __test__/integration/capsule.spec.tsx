import React from 'react'
import { act } from 'react-dom/test-utils'
import Redity, { Capsule, render } from '../../src'
import { displayDOM } from '../initial.config'

const initRender = displayDOM()

describe('capsule', function () {
    it('Capsule Component', function (done) {
        const keyName = 'KEY_TEST'
        const store = {
            title: 'Hello'
        }

        function Component() {
            return <Capsule keyName={keyName}>{() => <h1>{store.title}</h1>}</Capsule>
        }

        act(() => {
            initRender(<Component />)
            expect(render(keyName)).toBeTruthy()
            expect(render('other_key')).toBeFalsy()
            expect(Redity.size()).toBe(1)
            done()
        })
    })

    it('sending Props', function (done) {
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

        act(() => {
            initRender(<Component />)
            expect(render(keyName)).toBeTruthy()
            done()
        })
    })
})
