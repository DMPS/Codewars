function prioritizeMissiles(missiles){
  return missiles.sort(function(a,b){
    return a.distance/a.speed > b.distance/b.speed;
  }).map(function(missile){
    return missile.name
  })
}
