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
    index?: string | number
    /**
     * Send Props
     */
    props?: () => T | T
}

export interface Registered {
    keyName: string
    index?: number | string
    render: () => void | Promise<void>
}
