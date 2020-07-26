$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:extrimeFeature.feature");
formatter.feature({
  "name": "Verify login and signin account Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify myntra logo and title name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify myntra logo",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDef.verify_myntra_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify home page title name as \"Online Shopping for Women, Men, Kids Fashion \u0026 Lifestyle - Myntra\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageStepDef.verify_home_page_title_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "verify user login functionalit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on login link",
  "keyword": "And "
});
formatter.step({
  "name": "user enter email addres as \"\u003cemailAddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "password"
      ]
    },
    {
      "cells": [
        "nareshan23@gmail.com",
        "nani6652"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify user login functionalit",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "LandingPageStepDef.user_click_on_login_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter email addres as \"nareshan23@gmail.com\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter password as \"nani6652\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify men jeans page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click on jeans link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should should see all jeans products",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "verify search button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user ente product name as \"\u003cproductItemName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.step({
  "name": "verify displyed the products related search",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productItemName"
      ]
    },
    {
      "cells": [
        "jeans"
      ]
    },
    {
      "cells": [
        "nokia"
      ]
    },
    {
      "cells": [
        "samsung"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify search button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user ente product name as \"jeans\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify displyed the products related search",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify search button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user ente product name as \"nokia\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify displyed the products related search",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageStepDef.user_launch_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters URL",
  "keyword": "When "
});
formatter.match({
  "location": "BasePageStepDef.user_enters_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify search button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user ente product name as \"samsung\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify displyed the products related search",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});