import { navigationTest } from "../../pageObjectsWithFixturesAndStorageState/fixtures/baseFixture.ts";

navigationTest.use({ userToLogin: "AdminUser"});

navigationTest.beforeEach(async ({ page }) => {
  await page.goto('');
});

navigationTest("Verify user log in", async ({ dashboardPage }) => {
  await dashboardPage.verifyLeaveTypeDropDownIsVisible();
});

navigationTest("Verify navigating to Apply Leave page", async ({dashboardPage, applyLeavePage}) => {
  await dashboardPage.navigateToApplyLeavePage();

  await applyLeavePage.verifyLeaveTypeDropDownIsVisible();
});

navigationTest("Verify navigating to My Leave page", async ({dashboardPage, myLeavePage}) => {
  await dashboardPage.navigateToMyLeavePage();

  await myLeavePage.verifyLeaveTypeDropDownIsVisible();
});

navigationTest("Verify navigating to Timesheets page", async ({dashboardPage, timesheetsPage}) => {
  await dashboardPage.navigateToTimesheetsPage();

  await timesheetsPage.verifyDropDownIsVisible();
});
