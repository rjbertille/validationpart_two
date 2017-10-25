import { ValidationparttwoPage } from './app.po';

describe('validationparttwo App', () => {
  let page: ValidationparttwoPage;

  beforeEach(() => {
    page = new ValidationparttwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
