import { test as base } from "@playwright/test";
import fs from "fs";
import { LoginPage } from "../../pageObjectsWithFixturesAndStorageState/pages/loginPage";
import { DashboardPage } from "../../pageObjectsWithFixturesAndStorageState/pages/dashboardPage";
import { ApplyLeavePage } from "../../pageObjectsWithFixturesAndStorageState/pages/applyLeavePage";
import { MyLeavePage } from "../../pageObjectsWithFixturesAndStorageState/pages/myLeavePage";
import { TimeSheetsPage } from "../../pageObjectsWithFixturesAndStorageState/pages/timesheetsPage";
export { expect } from "@playwright/test";

export const loginTest = base.extend<{
  userToLogin?: string;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}>({
  userToLogin: undefined,

  storageState: async ({ browser, userToLogin }, use) => {
    if (userToLogin) {
      const fileName = `./.auth/${userToLogin}.json` as string;

      if (!fs.existsSync(fileName)) {
        const page = await browser.newPage({ storageState: undefined });
        const loginPage = new LoginPage(page);
        const dashBoardPage = new DashboardPage(page);
        await loginPage.navigateToPage(loginPage.url);
        await loginPage.logInAsSpecificUser(userToLogin);
        await page.waitForLoadState("networkidle");
        await dashBoardPage.verifyLeaveTypeDropDownIsVisible();
        await page.context().storageState({ path: fileName });
        await page.close();
      }
      await use(fileName);
    } else {
      await use(undefined);
    }
  },
});

export const navigationTest = loginTest.extend<{
  applyLeavePage: ApplyLeavePage;
  myLeavePage: MyLeavePage;
  timesheetsPage: TimeSheetsPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  applyLeavePage: async ({ page }, use) => {
    const applyLeavePage = new ApplyLeavePage(page);
    await use(applyLeavePage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashBoardPage = new DashboardPage(page);
    await use(dashBoardPage);
  },
  myLeavePage: async ({ page }, use) => {
    const myLeavePage = new MyLeavePage(page);
    await use(myLeavePage);
  },
  timesheetsPage: async ({ page }, use) => {
    const timesheetsPage = new TimeSheetsPage(page);
    await use(timesheetsPage);
  },
});
