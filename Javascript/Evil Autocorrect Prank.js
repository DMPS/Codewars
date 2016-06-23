function autocorrect(input){
  var output=input.replace(/\byou+\b|\bu\b/gi, "your sister");
  return output
}
