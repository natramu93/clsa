package package1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
				features= "Features",
				monochrome=true,
				dryRun=true,
				glue="glue"
				)



@RunWith(Cucumber.class)
public class Runner {

}
