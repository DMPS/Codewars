function solution(list){
  var i;
  var threshold = 3;
  var range = [];
  var result = [];
  for (i=0;i<list.length;i++){
    range.push(list[i]);
    if (range[range.length-1] +1 !== list[i+1]){
      if (range.length >= threshold){
        result.push(range[0]+'-'+range[range.length-1]);
      }
      else{
        while (range.length>0){
          result.push(range.shift());
        }
      }
      range = [];
    }
  }
  return result.join();
}
