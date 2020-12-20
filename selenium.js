const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.manage().setTimeouts({implicit: 10000});
driver.get('https://synergic-health.yextdemos.com/');

console.log("hello!");

driver.findElement(By.className('js-yext-query')).sendKeys('pay my bill');
driver.findElement(By.className('js-yext-query')).sendKeys(webdriver.Key.ENTER);


// let element = driver.wait(until.elementLocated(By.className('js-HitchhikerFaqAccordion-toggle')), 10000, "timed out");
// element.click;
driver.sleep(10000).then(function()  {
    driver.findElement(By.className('js-HitchhikerFaqAccordion-toggle')).click();
    
})

driver.sleep(11000).then(function() {
    driver.quit();
});
