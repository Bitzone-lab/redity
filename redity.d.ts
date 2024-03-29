declare module "redity" {
  /**
   * Register component by keyName optional
   * @param keyName identificator for register component.
   * @param index register multiple components related to the keyName.
   * @return local render method
   */
  const useRender: (keyName?: string, index?: string | number) => () => void;
  /**
   * Renders by keyName
   * @param keyName identificator for render
   * @param index index of the component related to the keyName.
   */
  const render: (keyName: string | string[], index?: string | number) => void;
  /**
   * Render various indexed components related to the keyName.
   * @param keyName identificator.
   * @param omits omit indexed
   */
  const renders: (keyName: string, omits?: (string | number)[]) => void;
  export { useRender, render, renders };
}
