import { MyAngularCliProjectPage } from './app.po';

describe('my-angular-cli-project App', function() {
  let page: MyAngularCliProjectPage;

  beforeEach(() => {
    page = new MyAngularCliProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
