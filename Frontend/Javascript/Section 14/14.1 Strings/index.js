alert("hello" + "world");

var message = "hello";
var myName = "Noah";

alert(message + "cool dude," + myName);

var name = "ghfslk;jgsdaujfi";
name.length;

var maxLength = 140;

var note = "this is my message";

alert(
  `you have written ${note.length}, you have ${maxLength - note.length} characters left`,
);

var name = "noah clar";
name.slice(0, 1);
name.slice(0, 5);

alert(note.slice(0, 140));

name = name.toUpperCase();
name - name.toLowerCase();

var getName = prompt("hello what is your name");
var capitalize = getName.slice(0, 1).toUpperCase();
var remander = getName.slice(1);
alert("hello your name is " + capitalize + remander);
