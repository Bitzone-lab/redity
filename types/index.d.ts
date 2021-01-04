import { Render as RenderFun, Renders as RendersFun } from './rendering_types';
import * as TypesConnect from './types/createConnect';
declare const connect: TypesConnect.Connect<{}>, Capsule: import("./types/createCapsule").TypeCapsule, useRender: import("./types/createUseRender").UseRender, useLocal: typeof import("./types/useLocal").default, getProps: import("./types/tools").GetProps<{}>;
declare const render: RenderFun;
declare const renders: RendersFun;
export declare type Wrapped<T> = TypesConnect.Wrapped<T>;
export declare type Render = RenderFun;
export declare type Rendes = RendersFun;
declare function Redity(): void;
declare namespace Redity {
    var connect: TypesConnect.Connect<{}>;
    var Capsule: import("./types/createCapsule").TypeCapsule;
    var useRender: import("./types/createUseRender").UseRender;
    var render: RenderFun;
    var renders: RendersFun;
    var useLocal: typeof import("./types/useLocal").default;
    var getProps: import("./types/tools").GetProps<{}>;
    var size: () => number;
    var version: string;
}
export default Redity;
export { connect, Capsule, useRender, render, renders, useLocal, getProps };
//# sourceMappingURL=index.d.ts.map