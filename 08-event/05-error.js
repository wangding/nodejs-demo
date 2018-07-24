#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

function MusicPlayer(track) {
  this.track = track;
  this.playing = false;

  for(var methodName in EventEmitter.prototype) {
    //console.log(methodName);
    this[methodName] = EventEmitter.prototype[methodName];
  }
}

MusicPlayer.prototype = {
  toString: () => {
    if(this.playing) {
      return 'Now Playing: ' + this.track;
    } else {
      return 'Stopped';
    }
  }
};

var musicPlayer = new MusicPlayer('storm');

musicPlayer.on('play', () => {
  this.playing = true;
  console.log('\n', this.toString());
});

musicPlayer.on('stop', () => {
  this.playing = false;
  console.log('\n', this.toString());
});

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});

musicPlayer.emit('play');

setTimeout(() => {
  musicPlayer.emit('stop');
}, 2000);

setTimeout(() => {
  musicPlayer.emit('error', new Error('WRONG!'));
}, 3000);
