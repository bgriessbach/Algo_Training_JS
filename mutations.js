function mutation(arr) {
  arr[0]=arr[0].toLowerCase();
  var length=arr[1].length;
  for (var i=0; i<length;i++){
    if(arr[0].indexOf(arr[1][i].toLowerCase())==-1){
      return false;
    }
  }
  
  return true;
}
