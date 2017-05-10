import { IMAliveWebPage } from './app.po';

describe('imalive-web App', () => {
  let page: IMAliveWebPage;

  beforeEach(() => {
    page = new IMAliveWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('IM works!');
  });
});
