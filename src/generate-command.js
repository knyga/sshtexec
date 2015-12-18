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