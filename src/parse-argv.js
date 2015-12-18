module.exports = function(val) {
	if(val.length < 3) {
		return {};
	}

	var envName = '';
	var userName = '';
	var commandList = [];
	var execResult = null;

	for(var i=0;i<val.length;i++) {
		execResult = /^-(\w+)=([^ ]+)/.exec(val[i]);

		if(!execResult && envName.length === 0 && userName.length === 0) {
			continue;
		}

		if(execResult) {
			switch(execResult[1]) {
				case 'e': envName = execResult[2]; break;
				case 'u': userName = execResult[2]; break;
				default: commandList.push(val[i]);
			}
		} else {
			commandList.push(val[i]);
		}
	}

	return {
		envName: envName,
		userName: userName,
		command: commandList.join(' ')
	};
}