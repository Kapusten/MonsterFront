import { EatmonsterPage } from './app.po';

describe('eatmonster App', () => {
  let page: EatmonsterPage;

  beforeEach(() => {
    page = new EatmonsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
