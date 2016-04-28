var events = require('events');
var eventEmitter = new events.EventEmitter();

// declaring a listener
eventEmitter.on('explosion', function (description) {
  console.log(description);
});

// sending an event
eventEmitter.emit('explosion', 'huge');