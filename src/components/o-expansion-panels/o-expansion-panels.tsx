import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'o-expansion-panels',
  shadow: false
})
export class OEpansionPanels {

  children: HTMLCollection;

  @Element() el: HTMLElement;

  componentDidLoad() {
    const oExpansionPanels = this.el.querySelector('.o-expansion-panels');
    if (oExpansionPanels) {
      this.children = oExpansionPanels.children;
    }
  }

  render() {
    return (
      <div class='o-expansion-panels'>
        <slot />
      </div>
    )
  }
}