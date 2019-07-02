'use strict';
const path = require('path');
const pify = require('pify');
const userHome = require('user-home');
const pathExists = require('path-exists');
const bplistParser = require('bplist-parser');
const untildify = require('untildify');

const bplist = pify(bplistParser);
const settings = path.join(userHome, '/Library/Preferences/com.runningwithcrayons.Alfred-Preferences-3.plist');

const resolveAlfred3 = async () => {
	const exists = await pathExists(settings);

	if (!exists) {
		return;
	}

	const data = await bplist.parseFile(settings);
	const syncfolder = data[0].syncfolder || '~/Library/Application Support/Alfred 3';

	return untildify(`${syncfolder}/Alfred.alfredpreferences`);
};

const resolveAlfred4 = () => {
	const prefsJsonPath = path.join(userHome, '/Library/Application Support/Alfred/prefs.json');

	try {
		return require(prefsJsonPath).current;
	} catch (error) {}
};

module.exports = async () => {
	const alfred3 = await resolveAlfred3();
	const alfred4 = resolveAlfred4();

	return {alfred3, alfred4};
};
