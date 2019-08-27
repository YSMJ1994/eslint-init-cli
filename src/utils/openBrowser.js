/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const execSync = require('child_process').execSync;
const open = require('open');

let OSX_CHROME = 'google chrome';

function openBrowser(url) {
	let browser = process.env.BROWSER;
	const shouldTryOpenChromeWithAppleScript =
		process.platform === 'darwin' && (typeof browser !== 'string' || browser === OSX_CHROME);

	if (shouldTryOpenChromeWithAppleScript) {
		try {
			execSync('ps cax | grep "Google Chrome"');
			execSync('osascript openChrome.applescript "' + encodeURI(url) + '"', {
				cwd: __dirname,
				stdio: 'ignore'
			});
			return true;
		} catch (err) {
			// Ignore errors.
		}
	}

	try {
		let options = { wait: false };
		// console.log('execute open')
		open(url, options).catch(err => {
			// console.log('open reject error ', err);
		}); // Prevent `unhandledRejection` error.
		return true;
	} catch (err) {
		// console.log('open error', err);
		return false;
	}
}

module.exports = openBrowser;
