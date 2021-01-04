import React from 'react';
import { Hook, Connection, Encapsulation } from '../store';
declare type TypeComponent = (props: any) => JSX.Element;
export declare type Wrapped<T> = (props: React.PropsWithChildren<T>) => JSX.Element;
declare type ConnectComponent<T = TypeComponent> = (Component: T) => Wrapped<T>;
/**
 * Register component for render by key name
 * @param keyName key name
 * @param index index
 */
export declare type Connect<T = {}> = (keyName: string, index?: string | number) => ConnectComponent<T>;
export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>): Connect;
export {};
