import { TestWindow } from '@stencil/core/testing';
import { Toggle } from './toggle';

describe('my-component', () => {
  it('should build', () => {
    expect(new Toggle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: any;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Toggle],
        html: '<my-component></my-component>'
      });
    });
  });
});
