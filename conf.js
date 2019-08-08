require('babel-register')({
	presets: ['latest'],
});

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
	framework: 'jasmine',
	jasmineNodeOpts: {
		// If true, print colors to the terminal.
		showColors: true,
		defaultTimeoutInterval: 50000,
		// Print steps to the terminal
		print: function() {},
	},

	onPrepare: function setup() {
		// Display steps description to the terminal
		jasmine.getEnv().addReporter(
			new SpecReporter({
				spec: {
					displayStacktrace: true,
				},
			})
		);
	},

	// argv: process.argv,
	// statement: '--mobile',

	seleniumAddress: 'http://localhost:4723/wd/hub',
	//seleniumAddress2: 'http://localhost:4747/wd/hub',

	specs: ['spec.js'],

	// Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
	capabilities: {
		//browserName: 'chrome',
		browserName: '', // should be empty for run app test
		platformName: 'Android',
		platformVersion: '8.0',
		deviceName: 'Android Emulator',

		app: "/Users/user/Downloads/app-debug.apk", // path for app on the PC
		//bundleId: '[com..],
		autoWebview: true, //
		//autoWebviewTimeout: 10000,
		autoAcceptAlerts: 'true',

		//app: "C:/src/app-v5/platforms/android/build/outputs/apk/android-x86-debug.apk",
		//nativeInstrumentsLib:true
	},

	// capabilities: {
	// 	browserName: '',
	// 	platformName: 'iOS',
	// 	platformVersion: '12.3.1',
	// 	deviceName: 'iPhone 7 Plus',
	// 	automationName: "XCUITest",
	// 	xcodeOrgId: "TC",
	// 	xcodeSigningId: "iPhone Developer",
	// 	udid: "8aaecf932776dbeb0299a23c8791b9c989672199",
	//
	// 	app: "/Users/user/Downloads/TenantCloud.ipa",
	// },

	//baseUrl: 'http://localhost:8000'
	baseUrl: 'http://10.0.2.2:8000',
};

// exports.config = {
// 	framework: 'jasmine',
// 	seleniumAddress: 'http://localhost:4444/wd/hub',
//
// 	capabilities: {
// 		'browserName': 'chrome'
// 	},
//
// 	specs: ['spec.js'],
//
// };