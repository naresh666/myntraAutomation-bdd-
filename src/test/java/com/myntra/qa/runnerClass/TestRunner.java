package com.myntra.qa.runnerClass;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="G:\\naresh practice\\I Hub Selenium Manoj Sir\\MyntraAutomation_BDD\\src\\test\\resources\\Features",
		glue="com.myntra.qa.steps",
		plugin = {"pretty","html:test-output/cucmber_res"},
		dryRun = true,
		monochrome = true
		
		
		)

public class TestRunner {

}
