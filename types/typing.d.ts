import React from 'react';
export interface PropsCapsule<T = any> {
    /**
     * Function Component
     */
    children: (props?: T) => React.ReactNode;
    /**
     * Key name for render
     */
    keyName: string;
    /**
     * index aditional for render
     */
    index?: string | number | undefined;
    /**
     * Send Props
     */
    props?: T;
}
export declare type TypeComponent<T> = (props: React.PropsWithChildren<T>) => JSX.Element;
export declare type Wrapped<T> = (props: React.PropsWithChildren<T>) => JSX.Element;
declare type ConnectComponent<T> = (Component: TypeComponent<T>) => Wrapped<T>;
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
export declare type Connect<T> = (keyName: string, index?: string | number) => ConnectComponent<T>;
export interface Registered {
    keyName: string;
    index: number | string | undefined;
    render: () => void | Promise<void>;
}
export {};
