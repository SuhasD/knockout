Getting started with knockout


1. Install Node.js from https://nodejs.org/

2. Install Git Bash from https://git-scm.com/downloads

3. Check for correct installation by typing “npm” in command prompt.

4. Install http server for localhost deployment
a. Open Git bash and type “npm install http-server -g“
b. Use cd to navigate to project folder.
c. Start server by typing “http-server” in command line. 
d. Check for http://localhost:8080/ from your browser. 
e. You should be able to see your project. 

5. Install less compiler if you are using less as a part of architecture. 
a. Open git bash and type “$ npm install -g less”
b. For confirmation, type “lessc” in command prompt. 

6. To detect changes from less files and compile to css automatically, we are using 'less-watch-compiler' plugin.
a. Download zip from https://github.com/jonycheung/deadsimple-less-watch-compiler
b. Place less-watch-compiler.js in less folder.
c. Place config.json in working directory.
d. Open command prompt and navigate to project directory. 
e. Type “less-watch-compiler LESS_FOLDER CSS_FOLDER”
f.  Replace the folders with their respective names. 
