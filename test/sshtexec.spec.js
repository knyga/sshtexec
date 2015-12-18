var assert = require('assert');
var generateCommand = require(__dirname + '/../src/generate-command');
var parseArgv = require(__dirname + '/../src/parse-argv');

describe('sshtexec', function() {
	it('generates command', function() {
		var command = generateCommand({
			host: "localhost",
			users: {
				'www-data': 'aojsgea'
			}
		}, 'www-data', 'sh /var/www/script.sh');

		assert.equal(command, "sshpass -p 'aojsgea' ssh -o StrictHostKeyChecking=no www-data@localhost sh /var/www/script.sh");
	});

	it('parses argv', function() {
		assert.deepEqual(
			parseArgv(['node', '/private/var/www/shaman/sshtexec/sshtexec', '-e=qa', '-u=www-data', 'ls', '/var/www']), {
				envName: 'qa',
				userName: 'www-data',
				command: 'ls /var/www'
			});
	});
});