
var str = prompt ("Enter a sentence");

var firstLastUpperLtr = function(str){
  var first = str.charAt(0).toUpperCase();
  var last = str.charAt(str.length-1).toUpperCase();
  return last + first;
};

var count = function(str){
  var length = (str.length)/2;
  var letter = str.charAt(str.length-1);
  return letter;
};

alert(str);
alert(firstLastUpperLtr(str));
alert(count(str));
