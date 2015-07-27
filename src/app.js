/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();


var openTag = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  text:'<time>',
  font:'GOTHIC_14_BOLD',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
});

var closeTag = new UI.Text({
  position: new Vector2(0, 120),
  size: new Vector2(144, 168),
  text:'</time>',
  font:'GOTHIC_14_BOLD',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
});

var time = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 168),
  text:'%I:%M',
  font:'BITHAM_42_LIGHT',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
  
});

var date = new UI.TimeText({
  position: new Vector2(0, 75),
  size: new Vector2(144, 168),
  text:'%a %d %b',
  font:'GOTHIC_24',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
  
});

// Add elements to screen
window.add(openTag);
window.add(time);
window.add(date);
window.add(closeTag);
window.show();