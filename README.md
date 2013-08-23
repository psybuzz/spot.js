spot.js
=======

dots, boxes, and more to come!

Spot.js is a library for quick creation of DOM-based shapes from Javascript.  Plainly, it lets developers place dots and boxes on a web page and grow and shrink them from JS.

Just download the .js into your scripts folder, include it in your HTML, and then you can write things such as:

  ```javascript
  var sun = new Dot();
  if (noon)
    sun.grow();
  ```

Each shape object is DOM based, meaning that the members of each Dot are attached directly to the Div associated with that Dot.  This allows direct manipulation of shape objects without the need for a this.el property.

Any feedback is appreciated!
Hopefully, this may be of use to those looking for a quick visual markup tool.
More shapes and features to come soon...
