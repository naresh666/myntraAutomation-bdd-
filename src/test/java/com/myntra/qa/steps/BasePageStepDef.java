package com.myntra.qa.steps;

import com.myntra.qa.basePage.MyntraTestBasePage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class BasePageStepDef {
	Steps steps;
	public BasePageStepDef(Steps steps) {
		this.steps=steps;
		steps.testbase=new MyntraTestBasePage();
	}
	@Given("user launch browser")
	public void user_launch_browser() {
	    steps.testbase.intilizeDriver();
	}
	@When("user enters URL")
	public void user_enters_URL() {
	   steps.landingpage=steps.testbase.enterURL();
	}

}
