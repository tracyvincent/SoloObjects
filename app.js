var appititeForDestruction = {
  title : 'Appitite for Destruction',
  artist : 'Guns N\' Roses',
  numTracks : 12,
  runTime : '53:51',
  releaseDate : 'July 21st, 1987',
  billboardPeak : 1,
  numTopTens : 3,
  billboardTopTens : ['Welcome to the Jungle', 'Sweet Child o\' Mine', 'Paradise City'],
  label: 'Geffen Records',
  producer : 'Mike Clink',
  genre : 'Hard Rock/Heavey Metal/Hair Metal',
  albumHistory: function() {
  var topSingles = "";
  for (i = 0; i < this.billboardTopTens.length; i++){
    if (i < (this.billboardTopTens.length - 1)) {
      topSingles = topSingles + "\"" + this.billboardTopTens[i] + ",\" ";
    } else {
      topSingles = topSingles + " and \"" + this.billboardTopTens[i];
    }
  }
  var history = "The album \"" + this.title + "\" by " + this.artist + " was released on " +
    this.releaseDate + ". The " + this.genre + " album has " + this.numTracks + " tracks and a total run time of " +
    this.runTime + ". It reached a peak position of #" + this.billboardPeak + " on the Billboard Top 200, and spawned " +
    this.numTopTens + " Billboard Top 10 singles. The tracks that reached Top Ten status include " + topSingles +
    ".\" \"" + this.title + "\" was released by " + this.label + " and was produced by " + this.producer + ".";

    return history;
}
};

console.log(appititeForDestruction.albumHistory());
