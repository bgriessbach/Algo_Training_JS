function findLongestWord(str) {
  var tempArray=str.split(" ");
  var length=tempArray.length;
  var maxLength=0;
  for (var i=0; i<length;i++){
    if(tempArray[i].length>maxLength){
      maxLength=tempArray[i].length;
    }
  }
  return maxLength;
}
