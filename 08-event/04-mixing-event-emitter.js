#!/usr/bin/node

var EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
  this.track = track;
  this.playing = false;

  for(var methodName in EventEmitter.prototype) {
    console.log(methodName);
    this[methodName] = EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype = {
  toString: function() {
    if(this.playing) {
      return "Now Playing: " + this.track;
    } else {
      return 'Stopped';
    }
  }
}

var musicPlayer = new MusicPlayer('storm');

musicPlayer.on('play', function() {
  this.playing = true;
  console.log('\n', this.toString());
});

musicPlayer.on('stop', function() {
  this.playing = false;
  console.log('\n', this.toString());
});

musicPlayer.emit('play');

setTimeout(function() {
  musicPlayer.emit('stop');
}, 2000);
