/// <reference types="react" />
import { PropsCapsule, Registered } from '../typing';
export default function createCapsule(registers: Map<string, Registered>): <T>(props: PropsCapsule<T>) => JSX.Element;
