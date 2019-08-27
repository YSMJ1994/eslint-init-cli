const fs = require('fs-extra');
const path = require('path');
const paths = require('./paths');
const openBrowser = require('./openBrowser');
const CLIEngine = require('eslint').CLIEngine;
function resolveApp(relativePath) {
	return path.resolve(process.cwd(), relativePath);
}
const { logBasePath } = paths;
const reportPath = resolveApp(`${logBasePath}/commit-eslint-report.html`);
const reportDataPath = resolveApp(`${logBasePath}/commit-eslint-report.json`);

const cli = new CLIEngine({
	useEslintrc: true,
	fix: false
});

module.exports = async function checking(files) {
	const report = cli.executeOnFiles(files);
	// CLIEngine.outputFixes(report);
	const formatter = cli.getFormatter('html');
	const formatterCommand = cli.getFormatter();
	const formatReportHtml = formatter(report.results);
	const commandFormatterMsg = formatterCommand(report.results);

	fs.ensureFileSync(reportPath);
	fs.writeFileSync(reportPath, formatReportHtml);
	fs.ensureFileSync(reportDataPath);
	fs.writeFileSync(reportDataPath, JSON.stringify(report));
	console.log(commandFormatterMsg);
	// 若有警告或错误信息，则打开浏览器展示
	if (report.errorCount || report.warningCount) {
		// console.log('reportPath', reportPath)
		try {
			await openBrowser(`file://${reportPath}`);
		} catch (e) {}
	}
	setTimeout(() => {
		if (report.errorCount) {
			// 有error级别错误
			process.exit(-1);
		}
	}, 500);
};
