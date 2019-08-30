import { newE2EPage } from '@stencil/core/testing';

describe('o-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<o-button></o-button>');
    const element = await page.find('o-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<o-button></o-button>');
    const component = await page.find('o-button');
    const element = await page.find('o-button >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);
  });
});
