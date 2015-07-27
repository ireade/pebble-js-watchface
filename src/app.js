/**
 * HTML5 Time - Pebble.js Watchface
 */

var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window({ fullscreen: true });

var openTag = new UI.Text({
  position: new Vector2(0, 10),
  size: new Vector2(144, 168),
  text:'<time>',
  font:'GOTHIC_14_BOLD',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
});

var closeTag = new UI.Text({
  position: new Vector2(0, 140),
  size: new Vector2(144, 168),
  text:'</time>',
  font:'GOTHIC_14_BOLD',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
});

var time = new UI.TimeText({
  position: new Vector2(0, 40),
  size: new Vector2(144, 168),
  text:'%I:%M',
  font:'BITHAM_42_LIGHT',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
  
});

var date = new UI.TimeText({
  position: new Vector2(0, 90),
  size: new Vector2(144, 168),
  text:'%a %d %b',
  font:'GOTHIC_24',
  color:'white',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'black'
  
});


window.add(openTag);
window.add(time);
window.add(date);
window.add(closeTag);
window.show();