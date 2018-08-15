/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface StencilToggle {
      'id': string;
    }
  }

  interface HTMLStencilToggleElement extends StencilComponents.StencilToggle, HTMLStencilElement {}

  var HTMLStencilToggleElement: {
    prototype: HTMLStencilToggleElement;
    new (): HTMLStencilToggleElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-toggle': HTMLStencilToggleElement;
  }
  interface ElementTagNameMap {
    'stencil-toggle': HTMLStencilToggleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-toggle': JSXElements.StencilToggleAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilToggleAttributes extends HTMLAttributes {
      'id'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;