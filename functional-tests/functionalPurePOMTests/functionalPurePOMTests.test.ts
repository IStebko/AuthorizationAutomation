import { test } from "@playwright/test";
import { LoginPage } from "../../purePOMPageObjects/pages/loginPage";
import { DashboardPage } from "../../purePOMPageObjects/pages/dashboardPage";

let dashBoardPage: DashboardPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage(loginPage.url);
  dashBoardPage = await loginPage.logInAsSpecificUser("AdminUser");
});

test("Verify user log in", async () => {
  await dashBoardPage.verifyLeaveTypeDropDownIsVisible();
});

test("Verify navigating to Apply Leave page", async () => {
  const applyLeavePage = await dashBoardPage.navigateToApplyLeavePage();

  await applyLeavePage.verifyLeaveTypeDropDownIsVisible();
});

test("Verify navigating to My Leave page", async () => {
  const myLeavePage = await dashBoardPage.navigateToMyLeavePage();

  await myLeavePage.verifyLeaveTypeDropDownIsVisible();
});

test("Verify navigating to Timesheets page", async () => {
  const timesheetsPage = await dashBoardPage.navigateToTimesheetsPage();

  await timesheetsPage.verifyDropDownIsVisible();
});
