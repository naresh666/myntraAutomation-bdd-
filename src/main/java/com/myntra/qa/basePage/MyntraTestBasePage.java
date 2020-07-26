package com.myntra.qa.basePage;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.myntra.qa.pages.LandingPage;


public class MyntraTestBasePage {

	private Properties prop;
	private WebDriver driver;
	String projectPath = System.getProperty("user.dir");

	public MyntraTestBasePage() {
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(projectPath+"//src/main/resources/PropertiesFile/config.properties");
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public WebDriver intilizeDriver() {
		if (prop.getProperty("browser").equals("chrome")) {
			System.setProperty("webdriver.chrome.driver" , projectPath + "//src/main/resources/drivers/chromedriver.exe");
			driver = new ChromeDriver();
		} else if (prop.getProperty("browser").equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", projectPath + "//src/main/resources/drivers/geckodriver.exe");
			driver = new FirefoxDriver();
		} else if (prop.getProperty("browser").equals("internetExplorer")) {
			System.out.println(prop.getProperty("browser"));
			System.setProperty("webdriver.ie.driver", projectPath + "//src/main/resources/drivers/IEDriverSever.exe");
			driver = new InternetExplorerDriver();
		}
		driver.manage().window().maximize();
		return driver;
	}

	public LandingPage enterURL() {
		driver.get(prop.getProperty("url"));
		return new LandingPage(driver);
	}



}
