import { env } from './conf.js';
let release = '',
	stage = "https://home.stage.tenants.co";

const waitForElement = element => {
	let until = protractor.ExpectedConditions;
	browser.wait(until.presenceOf(element));
};

describe('Test log in for android app', () => {
	it('Should be open list for server name', (done) => {
		browser.waitForAngularEnabled(false);
		browser.sleep(2000);
		element(by.css('[name="host"]')).click();
		done();
	});

	it('Select server name', (done) => {
		element(by.css('[value="https://home.stage.tenants.co"]')).click();
		browser.sleep(2000);
		done();
	});

	it('Should be click Apply button in the dev page', (done) => {
		element(by.css('[id="applyBtn"]')).click();
		waitForElement(element(by.id('email')));
		//browser.sleep(35000);
		done();
	});

	// For site testing
	//it('Go to the site for testing', function(done) {
		//browser.waitForAngularEnabled(false);
		//browser.get('https://home.ruslan.tenantcloud.dev/login');
		//browser.sleep(5000);
		//done();
	//});

	it('Should be user log in', (done) => {
		element(by.id('email')).sendKeys('r1@pm.com');
		element(by.id('password')).sendKeys('Property0');
		element(by.css('[type="submit"]')).click();
		browser.sleep(17000);
		done();
	});

	if (process.argv[3] === '--mobile') {
		it('Should be Dashboard', done => {
			expect(browser.getCurrentUrl()).toEqual('file:///android_asset/www/index.html#!/');
			done();
		});

		it('Click on the Dashboard icon', (done) => {
			element(by.css('.sm-action-bar')).click();
			done();
		});
	} else {
		it('Should be Dashboard', done => {
			expect(browser.getCurrentUrl()).toEqual('/');
			done();
		});
	}
	// Contact Page
	it('Click Contacts button', done => {
		$('[title="Contacts"]').click();
		expect(browser.getCurrentUrl()).toEqual('file:///android_asset/www/index.html#!/');
		done();
	});

	// Contact Page
	it('Click Tenants button', done => {
		$('[ui-sref="tenants.list"]').click();
		browser.sleep(1000);
		expect(browser.getCurrentUrl()).toEqual('file:///android_asset/www/index.html#!/users/tenants/move-in');
		browser.sleep(5000);
		done();
	});
});