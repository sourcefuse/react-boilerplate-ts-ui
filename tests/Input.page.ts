import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightInputPage {
  readonly description: Locator;
  readonly demoButton: Locator;
  readonly codeButton: Locator;

  constructor(public readonly page: Page) {
    this.page = page;
    this.description = page.locator('p', {
      hasText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos esse voluptate quos alias magni, excepturi at veniam dolore, error eaque cupiditate aperiam. Cumque nulla necessitatibus cum perferendis illo distinctio eos."
    });
    this.demoButton = page.locator('button', {
      hasText: 'demo'
    });
    this.codeButton = page.locator('button', {
      hasText: 'code'
    })
  }


  async goto() {
    await this.page.goto("http://localhost:3000/components/input");
  }
}
