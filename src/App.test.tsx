import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import {Builder, By, until} from "selenium-webdriver";
//import {assert, expect} from "chai";
import "chromedriver";
//import {} from "chai";
import {path} from "chromedriver";



//import { expect } from 'chai';



function launchWebDriver(){

  //path.join("C:/chromedriver/chromedriver.exe", "geckodriver")
 // alert(path);
 /* new Builder().forBrowser('chrome').build().then(
      driver => {
        return driver.get('http://google.com')
      }
  );*/
  let driver = new Builder().forBrowser('chrome').build();
  driver.get('http://www.google.com/ncr');
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnK')).click();
  driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  driver.quit();
}
test('test webdriver',  () => {
  launchWebDriver();
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Basic Jest tests with a simple assert', () => {
  test('should assert strings are equal', () => {
    const a = 'foobar';
    const b = 'foobar';
    expect(a).toMatch(b);
  });
  test('should assert strings are not equal', () => {
    const a = 'foobar';
    const b = 'hello';
    expect(a).not.toMatch(b);
  });
});
