import { Test5Page } from './app.po';

describe('test5 App', () => {
  let page: Test5Page;

  beforeEach(() => {
    page = new Test5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
