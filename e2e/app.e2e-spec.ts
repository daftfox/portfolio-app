import { PortfolioAppPage } from './app.po';

describe('portfolio-app App', () => {
  let page: PortfolioAppPage;

  beforeEach(() => {
    page = new PortfolioAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
