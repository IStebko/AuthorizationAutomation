import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./abstractPages/abstractPage";

export class TimeSheetsPage extends AbstractPage {
  private readonly userDropDown: Locator;

  constructor(page: Page) {
    super(page);

    this.userDropDown = page.locator(".oxd-userdropdown-tab");
  }

  public async verifyDropDownIsVisible() {
    {
      await expect(this.userDropDown).toBeVisible();
    }
  }
}
