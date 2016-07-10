/**
 * Provides model creation and search methods
 * @author Oleksandr Knyga <oleksandrknyga@gmail.com>
 * @license Apache License 2.0 - See file 'LICENSE.md' in this project.
 */

module.exports = function(env, user, command) {
	return [
		"sshpass -p '",
		env.users[user],
		"' ssh -o StrictHostKeyChecking=no ",
		user,
		"@",
		env.host,
		' ',
		command
	].join('');
};