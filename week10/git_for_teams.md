#GIT for Teams
##Explain what the Feature Branch Workflow is.
In Git, a Centralized Workflow uses a central origin repository with a single master branch to serve as the hub for all commits. In Git speak, this is simply referred to as the origin/master branch.

You clone this central repository and make a branch on your local environment to eventually be pushed back to the origin/master.

The core idea behind the Feature Branch Workflow is that all commits related a specific feature, or bug fix, are developed and stored in a dedicated branch instead of the master branch.

##Explain why the Feature Branch Workflow is important.
Feature Branch Workflow makes it easy for you to work on a particular feature or bug fix without disturbing the main codebase. It protects the master and origin/master branches by minimizing the amount of broken code that's committed to them.

1. Creates a known good starting point for changes.
2. Allows you to focus exclusively on the issue.
3. Allows for wipe and do-over.
4. Good opportunity to publish well-tested code.

##Use the Feature Branch Workflow in a team-based project.

First time contributor (No local repository)
- Get added as contributor on a GitHub repository
- git clone hyperlink_from_github (clone the repository)

Standard process (Starts with clean staging area)
- git pull (to sync changes from other team members from GitHub)
- git co -b feature_branch (make and check out a feature branch)
- make all commits to feature branch
- git co master (check out master branch)
- git pull (from origin master)
- git co feature_branch (check out feature branch)
- git rebase master (rebase your feature branch with master)
- git co master (check out master)
- git merge feature_branch (merge your feature branch into master)
- git push (to push changes to origin/master)
- git br -d feature_branch (to delete the feature branch)

To resolve a merge conflict during a rebase: adjust file, git add file_name, git rebase master --continue (repeat for as many merge conflicts as are thrown).

The I in TEAM is hidden in the a-hole! :)
1. Put other team members first.
2. What does the other person need from you.

Continued!!!!!!!!!!!!!!!!!!!!!!!!!

Workflow with merge commits
git df - for differences
git dfs - for staged differences

If you mistakenly forget to pull before merging a feature branch, you end up with a problem. It will fast-forward merge.

git pull --rebase origin master

##git config --global branch.master.rebase true

The above commands prevent merge commits from causing merge bubbles. It forces rebases instead of allowing 3-way merges. Top command is on a per pull basis. Bottom command creates an entry in the .gitconfig file.

make sure to run from sh first!!!!!!!!!!!
git config --global alias.done $'!sh -c \'git checkout ${2-master} && git merge @{-1} && git push ${1-origin} ${2-master}\' -'

git config --global alias.sync $'!sh -c \'git checkout ${2-master} && git pull ${1-origin} ${2-master} && git checkout @{-1} && git rebase ${2-master}\' -'
