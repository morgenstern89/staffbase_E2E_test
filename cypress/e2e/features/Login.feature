Feature: Login

  I want to log into Conduit application

  Scenario: Conduit Login
    Given I open Conduit login page
    When I type in
      |  username  |  password  |
      |  sar.yoon89@gmail.com  |  admin123  |
    And I click on Sign in button
    Then "Your Feed" should be displayed
