#File System
All Unix terminals have 3 channels: stdout, stdin, stderr
Access them with process.stderr.on('data', callback(data));
process.stdout.write('Bytes!');

throw err is the same as
console.err(err.toString());
process.exit([non-zero number]); // 0 would be a success exit

In node, every module (file) has its own scope. No reason for IFFE's.
Do requires outside the function scope

## What is node?
Node.js is a runtime system that runs directly on an operating system - cross OS compatible. It has access to all the operating system resources.

The update process with brew...
brew update
brew outdated
brew upgrade node
brew cleanup

The main idea of Node.js: use non-blocking, event-driven I/O to remain lightweight and efficient in the face of data-intensive real-time applications that run across distributed devices.

## Making a file executable from the command line without calling node:
chmod +x someTextFile
Add #!/usr/local/bin/node to the top of the file.
