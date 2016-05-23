#Monday
##Material Design - Google
Based on paper and ink and x, y, and z plains.
depth (dp - density independent pixel)
dimensions
color
motion
layout
shape
lighting

## Materialize - Front-end framework by Google that implements the Material Design principles

Close the gap between your taste and ability

Framework for software: A customizable template.

Components: cards, forms/controls, color palette, font, buttons, animations, grid, table, navbar, footer, toast, icons

#Tuesday
##Web-forms
They are a way of getting user input.
You embed controls in forms and capture form and control events.

Controls - They give the user control:
<textarea>
<input> - types: checkbox, text, radio, color, tel, email, password, number, url, and more
<select>
<button> - submit
<label>

Materialize Controls: - bundled styling and actions
button
inputlabel
progress bar
select - option groups
datepicker
switch
slider/range
file
character counter
radio
checkbox
error messages
success messages
validation at the materialize level and js level
materialize validation accepts regular expression in an attribute to customize HTML validation

#Wednesday
##jQuery and the DOM
JS library
Makes life easier
write less code
Chaining - jQuery collection returns - smooths over inconsistencies with cross-browser
iterating over elements
traversing the DOM
animation
manipulates the DOM
extended selecting of specific pieces of DOM
.css method

#Thursday
##jQuery events
Reduced syntax for event listeners
on()
off()
applied to many at once with a jQuery collection - no looping required
Standardizes event behavior across browsers Ex. focusin focusout replace focus and blur
Extends like hover event which combines mouseenter and mouseleave (which don't bubble typically)
Submit event for submitting forms
Ready event
keypress - char code
keyup - key code - nonprintable codes
keydown - key code - nonprintable codes
change() - when value of input changes
##Event obect: Holds info about the event
event handler callback receives the event object
.target is the bottom of the DOM tree
.currenttarget is currently bubbling level
.stopPropagation() - prevents further bubbling
.stopDefault() - cancels navigating after form submit or clicking a link
Event delegation: listening for event on a parent and filtering for any descendent

#Friday
##Linting
eslint
grammar checker for code
