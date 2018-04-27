#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
  this.track = track;
  this.playing = false;
  this.events = {
    play: 'play',
    stop: 'stop'
  };
  
  for(var methodName in EventEmitter.prototype) {
    //console.log(methodName);
    this[methodName] = EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype = {
  toString: function() {
    if(this.playing) {
      return 'Now Playing: ' + this.track;
    } else {
      return 'Stopped';
    }
  }
};

var musicPlayer = new MusicPlayer('storm');
var e = musicPlayer.events;

musicPlayer.on(e.play, function() {
  this.playing = true;
  console.log('\n', this.toString());
});

musicPlayer.on(e.stop, function() {
  this.playing = false;
  console.log('\n', this.toString());
});

musicPlayer.emit(e.play);

setTimeout(function() {
  musicPlayer.emit(e.stop);
}, 2000);

