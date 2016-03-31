Example project for http://buddy.works. It's CI tool that can build, deploy and run commands on every "git push".

I learned that when executing commands via ssh,
 - executables needs to be in user/local/bin or
 - before executing command, path to the executables must be provided (or if more commands, put that in a bash script with export PATH on top)
