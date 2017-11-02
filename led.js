var five = require("johnny-five");

// Create an instance of the Board class - referring to the Arduino Micro Controller 'board'
var board = new five.Board();
var stopBlink;

board.on('ready', function() {
  console.log("Board ready");
  // var led = new five.led(7);
  var led = new five.Led(7);



  var LedLight = function() {


    this.on = function() {
        led.on();
        status = true;
    }

    this.off = function() {
        led.off();
        status = false;
    }

    this.blink = function(freq, limit) {
      if (counter < limit) {
        stopBlink = setInterval(function() {
          if (this.status) {
            led.off();
            this.status = false;
          } else {
            led.on();
            this.status = true;
          }
        }, freq)
      }
      else {
        led.on()
      }
    }
  }



  var light = new LedLight(7);
  var counter = 0;

  setInterval(function() {
    counter++
    console.log(counter);
    if (counter >= 1 && counter < 10) {
      led.on()
    } else
    if (counter >= 10 && counter < 20) {
      led.blink(100.2500);
      setTimeout(function() {
        clearInterval(stopBlink);
        led.off();
      }, 2000);
    
  }else
    if (counter == 21) {
      counter = 0;
      led.off();
    }
  }, 1000)
})
