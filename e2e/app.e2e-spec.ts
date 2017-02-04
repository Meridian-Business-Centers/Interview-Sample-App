import { InterviewSampleAppPage } from './app.po';

describe('interview-sample-app App', function() {
  let page: InterviewSampleAppPage;

  beforeEach(() => {
    page = new InterviewSampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
