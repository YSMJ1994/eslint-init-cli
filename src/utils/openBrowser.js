/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

let chalk = require('chalk');
let execSync = require('child_process').execSync;
let spawn = require('cross-spawn');
let opn = require('open');

let OSX_CHROME = 'google chrome';

function executeNodeScript(scriptPath, url) {
	const extraArgs = process.argv.slice(2);
	const child = spawn('node', [scriptPath, ...extraArgs, url], {
		stdio: 'inherit'
	});
	child.on('close', code => {
		if (code !== 0) {
			console.log();
			console.log(chalk.red('The script specified as BROWSER environment variable failed.'));
			console.log(chalk.cyan(scriptPath) + ' exited with code ' + code + '.');
			console.log();
			return;
		}
	});
	return true;
}

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
	if (process.platform === 'darwin' && browser === 'open') {
		browser = undefined;
	}
	try {
		let options = { app: browser, wait: false };
		opn(url, options).catch(err => {
			console.log('open reject error ', err);
		}); // Prevent `unhandledRejection` error.
		return true;
	} catch (err) {
		console.log('open error', err);
		return false;
	}
}

module.exports = openBrowser;
