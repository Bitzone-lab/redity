import React from 'react';
import { Hook, Connection, Encapsulation } from '../store';
export default function createConnect(registers: Map<string, Hook | Connection | Encapsulation>): (keyName: string, index?: string | number | undefined) => (Component: () => JSX.Element) => <T>(props: React.PropsWithChildren<T>) => JSX.Element;
