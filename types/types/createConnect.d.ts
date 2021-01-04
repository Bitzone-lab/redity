import React from 'react';
import { Hook, Connection, Encapsulation } from '../store';
declare type TypeComponent<T> = (props: React.PropsWithChildren<T>) => JSX.Element;
export declare type Wrapped<T> = (props: React.PropsWithChildren<T>) => JSX.Element;
declare type ConnectComponent<T> = (Component: TypeComponent<T>) => Wrapped<T>;
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
export declare type Connect<T> = (keyName: string, index?: string | number) => ConnectComponent<T>;
export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>): (keyName: string, index?: string | number | undefined) => <T>(Component: TypeComponent<T>) => Wrapped<T>;
export {};
