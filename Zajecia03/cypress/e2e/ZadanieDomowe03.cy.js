import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePAge";

const loginPage = new Login();
const homePage = new HomePage();

describe("ZadanieDomowe3@GoIT QAA", () => {
  beforeEach(() => {
    loginPage.visit();
  });
  it("LMS - TEST 1: logowanie przez email user888@gmail.com, oraz wyjście z aplikacji", () => {
      loginPage.login("user888@gmail.com", "1234567890");
  });
  it("LMS - TEST 2: logowanie przez email testowyqa@qa.team, oraz wyjście z aplikacji", () => {
      loginPage.login("testowyqa@qa.team", "QA!automation-1");
  });
  afterEach(() => {
    homePage.logout();
  });
});