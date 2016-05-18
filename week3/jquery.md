# Jquery!
Chaining is possible in jQuery because of the return type of the functions. The return types are consistent and always return a jQuery collection which is similar to a nodelist.

$.each and $.map equate to forEach and map on from arrays.

Keeping script loads at bottom of body allow the HTML to load first before pausing to process script

Common convention is to prefix your variables with a $ to indicate that the variable contains a jQuery object.

Use the jQuery cheet sheet @ https://oscarotero.com/jquery/
The yellow section of the cheat sheet is the parameters that go inside the $ function.

On a jQuery object, .get(index) returns the node with more info attached;
.eq(index) returns the node wrapped in jQuery object still;
and array notation returns just the node.

To match multiple ID's that begin with "my" : $('div[id^=my]')

jQuery allows you to pass in HTML to the $ function to create an element.
Example: var myDiv = $('<div class="active"></div>');

.parent() returns a normalized (textNode vs. elementNode) which is also a jQuery object.

.append on a jQ object to append to the object.

.remove() on a jQ object to remove them all.

All functions are applied to every element in the jQuery collection. Because of that, be very careful with the selectors chosen or you may apply to unintended targets.

.addClass
.removeClass
.toggleClass

jQuery works with functions that when empty they get the value, but if you provide a parameter, they set the value.

.css({}) takes an object with keys and values matching class. This allows setting multiple attributes at once. It appends all styles in the object as inline-styles. Use camelCase only!!!!

.attr(attrName, value) - Skip value to just return attribute value.

.clone to make a copy of the dom tree at your element and below.

.before and .insertBefore are same just ordered differently
.after and .insertAfter "   "

.children() to drill down in a jQuery collection. Pass a selector as the argument to select inside of the collection.

.slice() allows you to filter the collection down to a subset

.animation() allows you to perform a custom animation of a set of CSS properties.
