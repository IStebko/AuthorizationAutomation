import fs from "fs";
import path from "path";
import { Page } from "@playwright/test";

export abstract class AbstractPage {
  public readonly config: any;
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    this.config = JSON.parse(
      fs.readFileSync(path.resolve("testConfig.json"), "utf8")
    );
  }

  public async navigateToPage(url: string) {
    await this.page.goto(url);
  }
}
