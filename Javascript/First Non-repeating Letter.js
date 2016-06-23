function firstNonRepeatingLetter(s) {
  var length  = s.length;
  var repeated = {};
  for (var i = 0; i < length; i++){
    for (var j = i+1; j < length; j++){
      if(s[i].toLowerCase() === s[j].toLowerCase()){
        repeated[s[i].toLowerCase()] = true;
        break;
      }
    }
    if (!repeated[s[i].toLowerCase()]){
    return s[i]
    }
  }
  return '';
}
