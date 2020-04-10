
const path = require('path');
const fs   = require('fs');
const os   = require('os');

var spawn = require('child_process').spawn;

let identifyFile = path.join(os.homedir(), '.bakerx', 'insecure_private_key');
let sshExe = `ssh -i "${identifyFile}" -p 2800 -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null vagrant@127.0.0.1 `;


function shspawn(command) {
   spawn('sh', ['-c', command], { stdio: 'inherit' });
} 

shspawn(sshExe);