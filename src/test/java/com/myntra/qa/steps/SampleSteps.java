package com.myntra.qa.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SampleSteps {
	@When("demo user {string} , {string} and {string} is step {int}")
	public void demo_user_and_is_step(String username, String mail, String password, Integer int1) {
	 System.out.println("name "+username+" email :"+mail+" and password is :"+password);  
	}

@Given("demo step {int}")
public void demo_step(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}
/*
@When("demo step {int}")
public void demo_step(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Then("demo step {int}")
public void demo_step(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}
	
*/
}
