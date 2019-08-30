import { Component, h } from '@stencil/core';

@Component({
  tag: 'o-button',
  shadow: false
})
export class OButton {

  render() {
    return <button><slot /></button>;
  }
}
