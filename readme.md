
### Hi Anthony

This little script will parse through your directory of markdown files and copy them to a new directory with the converted file name.

There isn't any validation so if a file name doesn't match the info you gave me then it'll probably explode... GL!

### To Run:

- After cloning this repo, `npm install`
- Edit  `app.js`. On line 52 & 53 there are two variables that tell this script which directory to parse and where to copy the new files to. Edit those as need be. (Make sure destination directory exists!)
- Run the script via `node app.js`
- Your files will now exist in the new directory with the converted file names, enjoy.
