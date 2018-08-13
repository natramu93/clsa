package package1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
				features= "Features",
				monochrome=true,
				dryRun=true,
				glue="glue",
				tags= {"@regression , @negative",/*or*/
						"@regression", "@negative",/* and */
						"~@negative"/*not*/
				},
				format= {"pretty",
						"html:reports/html",
						"junit:reports/junit.xml",
						"json:reports/report.json"})
@RunWith(Cucumber.class)
public class Runner {

}
