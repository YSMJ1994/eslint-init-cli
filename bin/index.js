#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');
const path = require('path');

program
	.version(packageJson.version)
	.option('--typescript', 'init with typescript')
	.option('--react', 'init with react')
	.option('--vue', 'init with vue')
	.action(onInit);

program
	.command('init')
	.option('--typescript', 'init with typescript')
	.option('--react', 'init with react')
	.option('--vue', 'init with vue')
	.description('init your project by eslint and prettier')
	.action(onInit);

program.command('check [files...]').action(onCheck);
program.command('report').action(onReport);

program.parse(process.argv);

if (!program.args.length) {
	program.help();
	// program.CommandOptions
}

function sleepToExcute(cb, delay) {
	return new Promise(resolve => {
		setTimeout(() => {
			cb && cb();
			resolve();
		}, delay);
	});
}

function sleep(duration = 0) {
	return new Promise(resolve => {
		setTimeout(resolve, duration);
	});
}

async function onInit() {
	const { typescript = false, react = false, vue = false } = program.opts();

	console.log(chalk.cyan('eslint-init-cli 初始化中...'));
	const { gendEslintrc, gendIgnore } = require('../src/utils/gend-eslintrc');

	console.log(chalk.blue('正在写入eslint配置文件...'));
	await sleep(500);
	gendIgnore();
	console.log(chalk.green('.eslintignore配置完毕！'));
	gendEslintrc({ vue, react, ts: typescript });
	console.log(chalk.green('.eslintrc.js配置完毕！'));
	console.log(chalk.green('eslint配置完毕！'));

	console.log(chalk.blue('正在写入prettier配置文件...'));
	await sleep(500);
	require('../src/utils/gend-prettierrc').gend();
	console.log(chalk.green('.prettierrc.js配置完毕！'));
	console.log(chalk.green('prettier配置完毕！'));

	console.log(chalk.blue('正在写入package.json...'));
	await sleep(500);
	require('../src/utils/update-package')();
	console.log(chalk.green('package.json写入完毕！'));

	console.log(chalk.blue('正在写入eslint说明文档...'));
	await sleep(500);
	require('../src/utils/copyEslintReadme').gend();
	console.log(chalk.green('写入eslint说明文档成功！'));

	console.log(chalk.cyan('eslint-init-cli 初始化成功，Happy Coding！'));
}

function onCheck(files) {
	require('../src/utils/checking')(files);
}
function onReport() {
	console.log('report');
	// todo
}
