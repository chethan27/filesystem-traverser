const readline = require("readline-sync");
var fs = require("fs");
var path = require("path");

var nooffiles = 0,
  tot_fsize = 0,
  max_fsize = 0,
  avg_fsize = 0;
var arr_ext = [];
var ten_path = [];


let dir_path = readline.question("enter the path if you want else press enter to select root directory");

var traverseFileSystem = function(currentPath) {
  try {
     //console.log(currentPath);
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
      var currentFile = currentPath + "/" + files[i];
      var stats = fs.statSync(currentFile);
      if (stats.isFile()) {
        // console.log(currentFile);

        var f_path = path.extname(currentFile);
        // console.log(f_path);
        arr_ext.push(f_path);

        if (stats.size > max_fsize) {
          max_fsize = stats.size;
        }

        tot_fsize += stats.size;
        nooffiles++;
      } else if (stats.isDirectory()) {
        traverseFileSystem(currentFile);
      }
    }
  } catch (e) {
      console.log("error "+e);
  }
};
traverseFileSystem(dir_path|| "/");

var sort_file = function(arr) {
  var a = [],
    b = [],
    prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
};
avg_fsize = tot_fsize / nooffiles;
var list_of_ext = sort_file(arr_ext)[0];
var sorted_arr = sort_file(arr_ext)[1];
var max_use_no = Math.max(...sorted_arr);
var max_use_ext = list_of_ext[sorted_arr.indexOf(Math.max(...sorted_arr))];


console.log(nooffiles," ",max_fsize," ", avg_fsize," "," ",max_use_ext," ", max_use_no);
console.log(list_of_ext);
dir_path= dir_path||'/';

console.log(dir_path);
if(ten_path.length<10){
  ten_path.push(dir_path);
}
else if(ten_path.length=10){
  ten_path.slice(1);
  ten_path.push(dir_path);
}

function stats(){
    return {nooffiles,
    max_fsize,
    avg_fsize,
    list_of_ext,
    max_use_ext,
    max_use_no,
    dir_path,
    ten_path};
}

module.exports = stats;
