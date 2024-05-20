import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./abstractPages/abstractPage";
import { ApplyLeavePage } from "./applyLeavePage";
import { MyLeavePage } from "./myLeavePage";
import { TimeSheetsPage } from "./timesheetsPage";

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
    return new ApplyLeavePage(this.page);
  }

  public async navigateToMyLeavePage() {
    await this.myLeaveLink.click();
    return new MyLeavePage(this.page);
  }

  public async navigateToTimesheetsPage() {
    await this.timeSheetsLink.click();
    return new TimeSheetsPage(this.page);
  }
}
