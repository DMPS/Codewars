function solution(input, markers){
  //split input into array by line
  input = input.split(/\n/);

  //iterates through every line
  for(var i=0;i<input.length;i++){
    //iterates through every marker
    for(var m=0;m<markers.length;m++){
      //Deletes the member of the array if a marker is found
      if(input[i].indexOf(markers[m])>=0){
        input[i] = input[i].substr(0,input[i].indexOf(markers[m]));
      }
    }
    //trim whitespace
    input[i] = input[i].replace(/\s+$/,'')
  }
  //join the array together
  return input.join('\n')
}
