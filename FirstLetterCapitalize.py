
function titleCase(str) {
  var arrayStr=str.split('');
  var length=arrayStr.length;
  var i=0;
  while(i<length){
    if (i==0){
      arrayStr[i]=arrayStr[i].toUpperCase();
    }
    else if(arrayStr[i]==' '){
      arrayStr[i+1]=arrayStr[i+1].toUpperCase();
      i++;
    }
    else{
      arrayStr[i]=arrayStr[i].toLowerCase();
    }
    i++;
  }
  var result=arrayStr.join('');
  return result;
}
