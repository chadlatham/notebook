#NodeJS HTTP Server
set -x VARIABLE value - to set an environment variable in FISH
set -e VARIABLE - to erase an environment variable
env to view environment variables
~/.config/fish/config.fish is the location of the startup script where you can create common environment variables
The PORT environment variable is necessary for Heroku deployment.
Heroku deploys HTTP servers while Surge will only allow client code to be.

To test the server in verbose mode
http -v GET localhost:8000/

Making response callback as efficient as possible is important to optimize server performance since it is called once per request.

The bodies of requests are streams.
let bodyData = '';
req.on('data' (data) => {
  bodydata += data;
});
req.on('end' () => {

  .......... etc ..........
})

##GIT Branching
Master, Head, myBranch
mybranch moves forward, head moves forward, master needs to merge
Verbs: MERGE, CHECKOUT
ALWAYS ALWAYS ALWAYS create a branch from Master - not from another branch.
git branch - to see current working branch (br for branch)
git br name - to create a new branch called name
git br -D name - to delete a branch called name - the Cap D is for non-merged branches - d is for merged branches.
git checkout name - to switch to the branch called name (co for checkout)
git co -b name - to create a branch and switch to it at same time
You MERGE into master and you REBASE into feature branches - never MERGE into feature branches.

##Node running servers
npm install -g nodemon
nodemon monitors your source file and automatically restarts the HTTP server when the file changes.
error: xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
run server with nodemon!!!! from now on.

##Prepping to deploy on Heroku
echo '.DS_Store' >> .gitignore
echo 'node_modules' >> .gitignore
echo 'npm-debug.log' >> .gitignore

--------
npm config set init-author-name 'YOUR NAME'
npm config set init-author-email 'YOUR EMAIL'
npm config set init-version 0.1.0
npm config set init-license MIT
--------
The above commands edit the ~/.npmrc file permanently which can be changed anytime you like.

npm init - to create a package.json file that tells Heroku what platform to run

echo 'web: node server.js' > Procfile

npm install -g foreman

nf start to start the server locally and test the deployment

brew install heroku

heroku login - after creating an account on their website

heroku apps:create chadlatham-party

git remote -v - to verify that the git repository has been created at heroku

git push heroku master

http GET chadlatham-party.herokuapp.com/guests
