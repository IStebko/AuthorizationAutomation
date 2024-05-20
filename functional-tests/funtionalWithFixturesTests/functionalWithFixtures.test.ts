import { navigationTest } from "../../pageObjectsWithFixtures/fixtures/baseFixture";

navigationTest.beforeEach(async ({ loginPage }) => {
  await loginPage.navigateToPage(loginPage.url);
  await loginPage.logInAsSpecificUser("AdminUser");
});

navigationTest("Verify user log in", async ({dashboardPage,}) => {
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
