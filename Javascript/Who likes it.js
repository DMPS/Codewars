function likes(names) {
  var namesArray = names;
  var result = ''
  if (namesArray.length==1){
    result = names[0]+' likes this'
  }
  else if (namesArray.length==2){
    result = names[0]+' and '+names[1]+' like this'
  }
  else if (namesArray.length==3){
    result = namesArray[0]+','+' '+namesArray[1]+' and '+namesArray[2]+' like this'
    console.log(names[1])
  }
  else if (namesArray.length>3){
    var others = namesArray.length-2
    result = namesArray[0]+', '+namesArray[1]+' and '+others+' others like this'
    console.log(namesArray[0],namesArray[1],namesArray.length-2)
  }
  else{
    result = 'no one likes this';
  }
  return result;
}
