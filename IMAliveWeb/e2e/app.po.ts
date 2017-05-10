import { browser, element, by } from 'protractor';

export class IMAliveWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('IM-root h1')).getText();
  }
}
