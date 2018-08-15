import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-toggle',
  styleUrl: 'toggle.css',
  shadow: true
})
export class Toggle {

  @Prop() id: string;

  render() {
    return (
      <div class="onoffswitch">
        <input type="checkbox" name={this.id} id={this.id} class="onoffswitch-checkbox" />
        <label class="onoffswitch-label" htmlFor={this.id}></label>
      </div>
    );
  }
}
