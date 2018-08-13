package glue;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefn {
WebDriver driver;
	@Given("^I get access to the Homepage$")
	public void i_get_access_to_the_Homepage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	    driver.get("http://magento.com");
	    Assert.assertEquals("eCommerce Platform | Best eCommerce Software for Selling Online | Magento", driver.getTitle());
	}

	@Given("^I click on user profile$")
	public void i_click_on_user_profile() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.className("fa-user")).click(); 
	}

/*	@When("^I input the username$")
	public void i_input_the_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys("natarajan.ramanathan93@gmail.com");
	}

	@When("^I input the password$")
	public void i_input_the_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("pass")).sendKeys("Welcome123");
	}*/
	@When("^I input the username as \"([^\"]*)\"$")
	public void i_input_the_username_as(String arg1){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^I input the password as \"([^\"]*)\"$")
	public void i_input_the_password_as(String arg1){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("pass")).sendKeys(arg1);
	}

	@When("^I click on login$")
	public void i_click_on_login() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("send2")).click();
	}

	@Then("^I should get the ID as \"([^\"]*)\"$")
	public void i_should_get_the_ID(String arg1) {
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertEquals(arg1, driver.
	    		findElement(By.xpath("//*[@class='account-help']/span")).getText());
	    driver.findElement(By.linkText("Log Out")).click();
	    //driver.quit();
	}
	
	@Then("^I should get the error message as \"([^\"]*)\"$")
	public void i_should_get_the_error_message_as(String arg1)
	{
		Assert.assertEquals("Invalid login or password.", driver.
				findElement(By.className("error-msg")).getText());
		//driver.quit();
	}
	
	@After
	public void doSomethingAfter(Scenario scenario){
	    // Do something after after scenario
		byte[] screenshot = ((RemoteWebDriver) driver).getScreenshotAs(OutputType.BYTES);
	    scenario.embed(screenshot, "image/png");
	    driver.quit();
	}
}
