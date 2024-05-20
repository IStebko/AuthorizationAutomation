import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./abstractPages/abstractPage";

export class DashboardPage extends AbstractPage {
  private readonly userDropDown: Locator;
  private readonly applyLeaveLink: Locator;
  private readonly myLeaveLink: Locator;
  private readonly timeSheetsLink: Locator;

  constructor(page: Page) {
    super(page);

    this.userDropDown = page.locator(".oxd-userdropdown-tab");
    this.applyLeaveLink = page.locator("button[title='Apply Leave']");
    this.myLeaveLink = page.locator("button[title='My Leave']");
    this.timeSheetsLink = page.locator("button[title='Timesheets']");
  }

  public async verifyLeaveTypeDropDownIsVisible() {
    {
      await expect(this.userDropDown).toBeVisible();
    }
  }

  public async navigateToApplyLeavePage() {
    await this.applyLeaveLink.click();
  }

  public async navigateToMyLeavePage() {
    await this.myLeaveLink.click();
  }

  public async navigateToTimesheetsPage() {
    await this.timeSheetsLink.click();
  }
}
