var fs = require('fs-extra'),
    path = require('path');


// filename should look like: 'January 22, 2015.md'
var convertFileName = function(filename) {

  var date = new Date(filename.slice(0,-3));

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  // We want 'YYYY-MMDD.md'
  var formattedDate = '' + year + '-' + (month.toString().length == 1 ? "0" + month : month) + (day.toString().length == 1 ? "0" + day : day) + '.md';

  return formattedDate;
};

isValidFile = function(child){
  return (child !== '.DS_store' && child.indexOf('.') !== 0);
};





var parseDir = function(root) {

  var stats = fs.lstatSync(root);

  if (stats.isDirectory()) {

    console.log("Directory found: parsing inside");
    fs.readdirSync(root).filter(isValidFile).map(function(child) {
      return parseDir(root + '/' + child);
    });

  } else {

    fs.copy(root, writeDir + '/' + convertFileName(path.basename(root)), function(err){
      if(err) throw err;
      console.log("-----");
      console.log("Copied " + path.basename(root) + " to " + writeDir + '/' + convertFileName(path.basename(root)));
    });

  }

};


var targetDir = 'posts',
    writeDir  = 'new'; // Must exist!

parseDir(targetDir);


