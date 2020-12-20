const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


driver.manage().setTimeouts({implicit: 10000});
driver.get('https://synergic-health.yextdemos.com/');

//start interaction
driver.findElement(By.className('js-yext-query')).sendKeys('pay my bill');
driver.findElement(By.className('js-yext-query')).sendKeys(webdriver.Key.ENTER);

driver.sleep(15000).then(function()  {
    driver.findElement(By.className('js-HitchhikerFaqAccordion-toggle')).click();
})

driver.sleep(20000).then(function() {
    driver.quit();
});
