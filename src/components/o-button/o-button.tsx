import { Component, h, Host, Element, Prop } from '@stencil/core';
import { Color, PredefinedGlobalSize, PredefinedButtonType } from '../../interface';

@Component({
  tag: 'o-button',
  shadow: false
})
export class OButton {

  /**
   *  Reference the host element
   */
  @Element() el: HTMLElement;

  /**
   * The button type
   */
  @Prop() type?: PredefinedButtonType = "button";

  /**
   * The button size
   */
  @Prop() size?: PredefinedGlobalSize = "small";

  /**
   * The button color
   */
  @Prop() color?: Color;

  /**
   * The outline style
   */
  @Prop() outline: boolean;

  /**
   * The button enable status
   */
  @Prop() disabled: boolean = false;

  /**
   * The text button is bold
   */
  @Prop() bold: boolean;

  render() {
    return (
      <Host class={{
        'o-button': true,
      }}>
        <button
          class={{
            'o-button-base': true,
            'o-button-small': this.size === 'small' ? true : false,
            'o-button-medium': this.size === 'medium' ? true : false,
            'o-button-large': this.size === 'large' ? true : false,
            'o-button-big': this.size === 'big' ? true : false,
            'o-button-primary': this.color === 'primary' ? true : false,
            'o-button-secondary': this.color === 'secondary' ? true : false,
            'o-button-warning': this.color === 'warning' ? true : false,
            'o-button-danger': this.color === 'danger' ? true : false,
            'o-button-success': this.color === 'success' ? true : false,
            'o-button-bold': this.bold,
          }}
          type={this.type}
          disabled={this.disabled}>
          <span><slot /></span>
        </button>
      </Host>
    );
  }
}
