import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from "../pages/dashboardPage";
import { MyLeavePage } from "../pages/myLeavePage";
import { TimeSheetsPage } from "../pages/timesheetsPage";
import { ApplyLeavePage } from "../pages/applyLeavePage";

export const loginTest = base.extend<{
  loginPage: LoginPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    loginPage.logInAsSpecificUser("Admin user");
    await use(loginPage);
  },
});

export const navigationTest = loginTest.extend<{
  applyLeavePage: ApplyLeavePage;
  dashboardPage: DashboardPage;
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
