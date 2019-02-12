## This is boundless ##

### Git convention ###
+ Create a seperate branch for every feature
+ Make a pull request instead of merging into master
+ Create Issues on github if there are any bugs in Git

## Project Setup ##
+ Make sure you have Node.js, React, NPM, installed
+ To start the program you can follow the procedure below
```
git clone https://github.com/UTMCSC301/csc301project-boundless.git
cd csc301Project-boundless
cd boundless

  for linux users: sudo npm install
  other users:     npm install
#once installed
npm start

```
### Creating and Pushing a new branch ###
```
cd csc301Project-boundless
git checkout -b <you-branch-name> (preferably the name of what you are working on)

#after doing some work, push to origin

git add .
git commit -m "some usefull message"
git push

#if pushing for the first time you might have to do
git push --set-upstream origin <your-branch-name>
```
