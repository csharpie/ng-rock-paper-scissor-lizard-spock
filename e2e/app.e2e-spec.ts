import { NgRockPaperScissorLizardSpockPage } from './app.po';

describe('ng-rock-paper-scissor-lizard-spock App', () => {
  let page: NgRockPaperScissorLizardSpockPage;

  beforeEach(() => {
    page = new NgRockPaperScissorLizardSpockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
