import {AppPage} from './app.po';

describe('dashboard App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display counter', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Shelf Bag Counter');
  });
  it('items on shelf less than capacity', () => {
    $$('.items li').each(function (element, index) {
      // Will print 0 First, 1 Second, 2 Third.
      element.getText().then(function (text) {
        var texts = text.split(':');
        var capacity = parseInt(texts[1]);
        var onShelf = parseInt(texts[3]);

        expect(capacity).toBeGreaterThan(onShelf);
      });
    });
  });
});
