function reindeers(presents) {
  var total = 8;
  var required = 2;
  while (presents>0){
    presents -= 30;
    required++;
    if (required > total){
      throw('Too many presents. Santa dead.')
    }
  }
  return required
}
