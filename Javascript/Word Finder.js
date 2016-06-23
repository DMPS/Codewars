function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  // your task
  var i;
  return this.words.filter(function (word){
    if(pattern.length === word.length){    
      for (i = 0; i < pattern.length; i++){
        if (pattern[i] !== word[i]  && pattern[i] !== '?'){
          return false;
        }
      }
      return true;
    }
    return false;
  });
};
