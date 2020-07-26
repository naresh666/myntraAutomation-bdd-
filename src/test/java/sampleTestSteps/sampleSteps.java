package sampleTestSteps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class sampleSteps {
	@Given("the user is logged in")
	public void the_user_is_logged_in() {
	  System.out.println("the user is logged in");
	}

	@Given("goes to landing page")
	public void goes_to_landing_page() {
	   System.out.println("goes to landing page");
	}

	@Then("user on login")
	public void user_on_login() {
	  System.out.println("user on login");
	}

}
