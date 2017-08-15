/* SystemJS module definition */
declare var module: NodeModule;
declare var particlesJS: any;
declare module '*.json' {
  const value: any;
  export default value;
}
interface NodeModule {
  id: string;
}
