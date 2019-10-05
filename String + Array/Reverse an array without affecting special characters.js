
// https://www.geeksforgeeks.org/reverse-an-array-without-affecting-special-characters/

function goo(val) {
  var specialChars = /[A-Za-z0-9]/g, input = val.split(""), l =0, r= val.length-1;
  while(l<r) {
    if(!(input[l].match(specialChars))) {
      l++;
    }
    else if(!(input[r].match(specialChars))) {
      r ++;
    } else {
      var tmp = input[l];
      input[l] = input[r];
      input[r] = tmp;
      l++;
      r--;
    }
  }
  return input;
}

goo("a!!!b.c.d,e'f,ghi");
