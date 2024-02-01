// check_accessibility.test.js
// "use strict";
// const { By, until } = require("selenium-webdriver");
// const { AccessibilityScanner } = require("./vendor/ea");
// const { getDriver } = require("./helpers/driver");
// const config = require("./vendor/ea-config");
// console.log(process.argv)
// //let newCofig = config.eaConfig("FanAccountProd");
// let accessibilityScanner = new AccessibilityScanner(config);
// let driver;

// // const email = "noreply@essentialaccessibility.com"
// // const password = "Test@1234"
// // const url = 'http://ui-tool-tester.essentialaccessibility.com.s3-website.us-east-2.amazonaws.com/'

// const email = "mdashrafulnobi@gmail.com";
// const password = "Master90#";
// const url = "https://fanaccount.axs.com/login";
// let baseUrl = "https://fanaccount.axs.com/";

// beforeAll(async function () {
//   driver = await getDriver();
//   accessibilityScanner.initializeDriver(driver);
// });

// describe("Jest - Checking Login page", function () {
//   it("Jest - should login to the home page, runs the various scanners and checks against accessibility thresholds", async function () {
//     await driver.get(url);

//     await driver.wait(
//       until.elementLocated(By.id("onetrust-accept-btn-handler")),
//       20000
//     );
//     await driver.findElement(By.id("onetrust-accept-btn-handler")).click();

//     expect(await driver.getCurrentUrl()).toEqual(baseUrl + "login");

//     await driver.wait(until.elementLocated(By.id("axs_email_login")), 20000);
//     await driver.findElement(By.id("axs_email_login")).sendKeys(email);
//     await driver.findElement(By.id("axs_pass_login")).sendKeys(password);
//     await driver.findElement(By.id("sign_in_btn")).click();

//     //await driver.wait(until.elementLocated(By.id("account")), 20000);
//     //expect(await driver.getCurrentUrl()).toEqual(baseUrl + "tickets");

//     await accessibilityScanner.scanPage();
//     await accessibilityScanner.sendResultsToPlatform();
//   }, 20000);
// });

// afterAll(async function () {
//   await accessibilityScanner.closeScanSession();
//   await driver.quit();
// });
