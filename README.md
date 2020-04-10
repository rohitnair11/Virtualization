# Virtualization
This code automatically creates and configures a virtual machine environment. The configuration is done with the help of Virtual Box specifically the VBoxManage command.  
The following tasks are automated with the code:  
### Virtual Machine setup
- Pull an image and create a virtual machine
- Add NIC with NAT networking
- Create a second NIC with either bridged networking enabled.
- Add a port forward from 2800 => 22 for guestssh.
- Add a port forward from 8080 => 9000 for a node application.
- Create a shared sync folder with the local.
- Configure SSH command to access the virtual machine.
### Post configuration
- Install nodejs, npm, git
- Clone a node application
- Install node modules

### Preqs

* Ensure you have `node --version >= 12.14`.
* Ensure you have `bakerx --version >= 0.6.2`.
* Ensure you have [VirtualBox installed](https://www.virtualbox.org/).

To install latest bakerx, run `npm install -g ottomatica/bakerx`.
If working from the project source, update it by changing into the project folder and run: `git pull`, and then `npm update`.

Pull an 3.9 alpine image.

```
bakerx pull ottomatica/slim#images alpine3.9-simple
```

### Install and test

Install the npm packages, then create a symlink for running your program.
```bash
npm install
npm link
```

Try it out.
```
v up
```
