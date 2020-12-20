# Answers-Analytics-Simulator

Answers Analytics Simulator suns a selenium test that automatically conducts searches on various Answers demo sites, and clicks elements. 

## Requirements
Download [npm](https://www.npmjs.com/get-npm) if you don't already have it.

Next, follow the instructions [here](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#Setting_up_Selenium_in_Node), summarized below. This repo only uses ChromeDriver (not GeckoDriver), so you only need to download one driver, however you can modify it to use Gecko:

1. Download the latest [ChromeDriver driver](https://chromedriver.chromium.org/downloads).
2. Unpack it somewhere fairly easy to navigate to. This demo assumes it's in the root of your home user directory, `Users/[username]`.
3. Add the chromedriver's location to your system PATH variable. This should be an absolute path from the root of your hard disk, to the directory containing the drivers. For example, if we were using a Mac OS X machine, our user name was dylan, and we put our drivers in the root of our home user directory, the path would be `/Users/dylan`. 

## How to Run it
 1. Download this repo
 2. Open a terminal window at the repo and type `npm start`
 2. You should see chrome driver open up, load the demo experience, and open an FAQ!


## How To Automate
* The `com.demo.daemon.plist` file is an example launchd configuration file, to get this working automatically on your machine. Follow the instructions here, https://medium.com/@chetcorcos/a-simple-launchd-tutorial-9fecfcf2dbb3
* Next steps would be figuring out how to get this in a lambd function and running automatically

# Resources
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#Selenium

https://medium.com/@chetcorcos/a-simple-launchd-tutorial-9fecfcf2dbb3