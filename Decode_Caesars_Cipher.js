function rot13(str) { // LBH QVQ VG!
  strArray=str.split('');
  var result=[];
  var length=strArray.length;
  for(var i=0; i<length; i++){
    if (strArray[i].toLowerCase()!=strArray[i]){
      var tempValue=strArray[i].charCodeAt(0);
      tempValue-=65;
      tempValue=(tempValue+13)%26;
      tempValue+=65;
      result.push(String.fromCharCode(tempValue));
    }
    else{
      result.push(strArray[i]);
    }
  }
  return result.join('');
}
