function songDecoder(song){
  var unWubbed = song.replace(/WUB/g,' ').replace(/\s{2,}/g, ' ').trim();
  return unWubbed;
}
