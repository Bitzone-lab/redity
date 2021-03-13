import React from 'react'

export interface PropsCapsule<T = any> {
    /**
     * Function Component
     */
    children: (props?: T) => React.ReactNode
    /**
     * Key name for render
     */
    keyName: string
    /**
     * index aditional for render
     */
    index?: string | number | undefined
    /**
     * Send Props
     */
    props?: T
}

export type TypeComponent<T> = (props: React.PropsWithChildren<T>) => JSX.Element
export type Wrapped<T> = (props: React.PropsWithChildren<T>) => JSX.Element
type ConnectComponent<T> = (Component: TypeComponent<T>) => Wrapped<T>
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
export type Connect<T> = (keyName: string, index?: string | number) => ConnectComponent<T>

export interface Registered {
    keyName: string
    index: number | string | undefined
    render: () => void | Promise<void>
}
