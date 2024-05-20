import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./abstractPages/abstractPage";

export class ApplyLeavePage extends AbstractPage {
  private readonly leaveTypeDropDown: Locator;

  constructor(page: Page) {
    super(page);

    this.leaveTypeDropDown = page.locator(".oxd-select-wrapper");
  }

  public async verifyLeaveTypeDropDownIsVisible() {
    {
      await expect(this.leaveTypeDropDown).toBeVisible();
    }
  }
}
