package samplestepsForSampleFeatures;

import java.util.List;

import cucumber.api.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class sample1 {
	@Given("^user launch browser1$")
    public void user_launch_browser1() throws Throwable {
        throw new PendingException();
    }

    @When("^user enters URL1$")
    public void user_enters_url1() throws Throwable {
        throw new PendingException();
    }

    @Then("^verify home page title name as1 \"([^\"]*)\"$")
    public void verify_home_page_title_name_as1_something(List<String> list1) throws Throwable {
        throw new PendingException();
    }

    @And("^verify myntra logo1$")
    public void verify_myntra_logo1() throws Throwable {
        throw new PendingException();
    }


}
