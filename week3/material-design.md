# Materialize - Google's front-end framework: http://materializecss.com/

Materialize is inspired and developed by web designers. Whereas BootStrap is inspired and developed by developers.

All elements have a 1 z-axis position based on the dp - density independent pixel. z-axis extends toward the user from the display.

Keylights create directional shadows while ambient light creates soft shadows from all angles. Shadows are cast by these two light sources.

Call to action buttons should stand off page more than other buttons.

Material has varying x & y dimensions and univeral thickness of 1dp
https://www.google.com/design/spec/what-is-material

I have been critical of my design abilities when I have not taken the time to complete many projects and improve my skill-set. This is not a fair assessment of where I am at currently. My abilities are not lacking, but my experience is.

Materialize, BootStrap, and Foundation are all front-end styling frameworks.

## Materialize Forms:
wrap an input and label with a div classed with .input-field

If you are having trouble with the labels overlapping prefilled content, Try adding class="active" to the label. You can also call the function Materialize.updateTextFields(); to reinitialize all the Materialize labels on the page if you are dynamically adding inputs.

labels must follow inputs - not preceed them.

## Dialogs:

### Toast - Similar to an alert
Materialize.toast(message, displayLength, className, completeCallback);

### Tool tip - class tooltipped
