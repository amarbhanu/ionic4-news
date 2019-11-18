import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/intro');
    });
    it('should have a title saying Intro', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Intro');
      });
    });
  });
});
