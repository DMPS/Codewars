function toCamelCase(str){
  var cleanStr = str.replace(/_|-/g," ");
  if (cleanStr[0] && cleanStr.length > 1){
    return [cleanStr.split(' ')[0]].concat(cleanStr.split(' ').slice(1,cleanStr.length)
      .map(function(word){
        return word.replace(/^[A-Za-z]/, word[0].toUpperCase())
      })).join('');    
  } 
  return cleanStr;
}
