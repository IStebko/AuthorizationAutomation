import fs from "fs";
import path from "path";
import { expect, Locator, Page } from "@playwright/test";
import { readFromCsv } from "../../helpers/readFromCsv";
import { AbstractPage } from "./abstractPages/abstractPage";
import { DashboardPage } from "./dashboardPage";

export class LoginPage extends AbstractPage {
  public readonly url: string;

  private readonly config: any;
  private readonly loginTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.config = JSON.parse(
      fs.readFileSync(path.resolve("testConfig.json"), "utf8")
    );
    this.url = this.config.loginUrl;

    this.loginTextBox = page.locator("input[placeholder='Username']");
    this.passwordTextBox = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("button[type='submit']");
  }

  public async loginValidUser(login: string, password: string) {
    await this.loginTextBox.fill(login);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  public async logInAsSpecificUser(userName: string) {
    const records = readFromCsv("testData", "Accounts.csv").filter((record) =>
      record.test_case.includes(userName)
    );
    return this.loginValidUser(records[0].login, records[0].password);
  }

  public async isLoginButtonVisible() {
    return await expect(
      this.loginButton,
      "Login link is not visible"
    ).toBeVisible();
  }
}
