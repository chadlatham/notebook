# jQuery Events

focus and blur events in the DOM hae bubbling problems in some browsers and are overridden in jQuery to focusin and focusout.

$(function() {}) is syntactic shortcut for $(document).ready(function() {})

// Callback must be a named variable if it will be removed.
.on('eventName' callBack(event) {}) to add events in jQuery.
.off() - will remove all event listeners if no parameters or same syntax as above to remove individual

Most event names also have event shortcuts. like $(document).click(callback)

.hover(enterCallBack, leaveCallBack) is shortcut for binding both mouseenter and mouseleave

## Key events - event.which contains the key
.keydown() repeat fires while holding key down. May fire after keypress on some browsers.
.keypress() fired when key is pressed down that actually inserts a character into a focusable control - fired on each insert. keypress attached to document may be exception to focusable control rule. keypress is only event that will give a char code back.
.keyup() fired last

keycode is universal between "a" and "A" while character code is ascii.

## Event Object

event.target - the DOM element that initiated the event

event.currentTarget - the currently bubbling object

// Event propagation is synchronous for bubbling. You can stop bubbling but not capturing.
event.stopPropagation() - Prevents the event from bubbling up the DOM tree, preventing any parent handlers from firing.

event.preventDefault() - Prevents the default action from occurring. Ex. anchors and submitted forms will not navigate to new URL.

## Event Delegation - Only works with .on() to create an event. - SUPER USEFUL!!!!!!!!!!!!!!!!!!!!!!!!!!

Passing a second paramater selector to act as a guard clause on a parent event handler. This eliminates complexity in the wrapper event handlers. Ex:

$('section').on('click', '.pokemon', function(event) {
  var $target = $(event.target);
  $target.remove();
  console.log(`Buh-bye, ${$target.text()}!`);
});

During event delegation, the 'this' variable is reassigned to the delegate object instead of the object with the event listenter.
