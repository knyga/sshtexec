var envs = require(__dirname + '/config.json').envs;
var generateCommand = require(__dirname + '/src/generate-command');
var parseArgv = require(__dirname + '/src/parse-argv');
var exec = require('child_process').exec;

var params = parseArgv(process.argv);
var command = generateCommand(envs[params.envName], params.userName, params.command);
var cexe = exec(command);

cexe.stdout.on('data', function(data) {
    console.log(data); 
});

cexe.stderr.on('data', function(data) {
    console.log(data); 
});