$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "This is a feature to test on valid and invalid inputs for username and password\r\n1. Valid input - natarajan.ramanathan93@gmail.com, Welcome123\r\n2. Invalid Input - test@testmail.com, Test123",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Valid Input",
  "description": "",
  "id": "login-feature;valid-input",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I get access to the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on user profile",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I input the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I input the password as \"Welcome123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get the ID as \"ID: MAG003417822\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_get_access_to_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_user_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ID: MAG003417822",
      "offset": 24
    }
  ],
  "location": "StepDefn.i_should_get_the_ID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Invalid Input",
  "description": "",
  "id": "login-feature;invalid-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I get access to the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on user profile",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get the error message as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-feature;invalid-input;",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 23,
      "id": "login-feature;invalid-input;;1"
    },
    {
      "cells": [
        "natarajan.ramanathan93@gmail.com",
        "welcome123"
      ],
      "line": 24,
      "id": "login-feature;invalid-input;;2"
    },
    {
      "cells": [
        "natarajan@gmail.com",
        "Welcome123"
      ],
      "line": 25,
      "id": "login-feature;invalid-input;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Input",
  "description": "",
  "id": "login-feature;invalid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I get access to the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on user profile",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"natarajan.ramanathan93@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"welcome123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get the error message as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_get_access_to_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_user_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "welcome123",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Input",
  "description": "",
  "id": "login-feature;invalid-input;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 14,
      "name": "@negative"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I get access to the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on user profile",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input the username as \"natarajan@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input the password as \"Welcome123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get the error message as \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_get_access_to_the_Homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_user_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan@gmail.com",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 25
    }
  ],
  "location": "StepDefn.i_input_the_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefn.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 35
    }
  ],
  "location": "StepDefn.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
});