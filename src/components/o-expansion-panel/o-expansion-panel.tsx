import { Component, h, Element, State, Prop, Method, Listen } from '@stencil/core';

@Component({
  tag: 'o-expansion-panel',
  shadow: false
})
export class OEpansionPanel {

  @Element() el: HTMLOExpansionPanelElement

  @State() contentScrollHeight: string | number = 0;
  @State() maxHeight: string = '0px';
  @State() rootEl: HTMLOExpansionPanelsElement | null;

  componentWillLoad() {
    this.rootEl = this.el.parentElement.parentElement as HTMLOExpansionPanelsElement;
  }

  componentDidLoad() {
    this.contentScrollHeight = this.el.querySelector('.o-expansion-panel-content').scrollHeight;
    if (this.open) {
      this.maxHeight = `${this.contentScrollHeight}px`;
    }
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.changeHeight();
  }

  private changeHeight() {
    const height = this.contentScrollHeight;

    if (this.maxHeight !== '0px') {
      this.maxHeight = `${height}px`;
    }
  }

  @Prop() disabled: boolean = false;
  @Prop() open: boolean = false;
  @Prop() value: number = 0;


  @Method()
  async close() {
    this.maxHeight = '0px';
    this.open = false;
  }

  @Method()
  async toggleContent() {
    if (this.disabled) {
      return;
    }

    const height = this.contentScrollHeight;

    if (this.maxHeight === '0px') {
      this.maxHeight = `${height}px`;
      this.open = true;
    } else {
      this.maxHeight = `0px`;
      this.open = false;
    }
  }

  render() {
    return (
      <div class={{
        'o-expansion-panel': true,
        disabled: this.disabled,
      }}>
        {/* Header */}
        <header onClick={() => this.toggleContent()}>
          <div class={{
            'header-container': true,
          }}>
            <slot name='header' />
          </div>
        </header>
        {/* Content */}
        <div
          class={{
            'o-expansion-panel-content': true,
            show: this.open,
          }}
          style={{ maxHeight: this.maxHeight }}>
          <slot name='content' />
        </div>
      </div>
    )
  }
}