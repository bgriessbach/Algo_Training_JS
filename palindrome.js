function palindrome(str) {
  var reducedStr=str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  var reversedArray=reducedStr.split('');
  reversedArray.reverse();
  var reversedStr=reversedArray.join('');
  if (reversedStr===reducedStr){
    console.log(reversedStr, reducedStr);
    return true;
  }
   
  return false;
}
