#Web forms!
<form></form> tags in html

## Control tags: Nesting inside a form tag is not required, but use the form attribute if not nested.
<input>
<select>
<textarea>
<button>

## Textual types:
<input type="text">

## The types below provide some validation and on mobile display different keyboards.
<input type="email">
<input type="search">
<input type="password">
<input type="tel">
<input type="url">

## Additional types
<input type="color">
<input type="date">
<input type="file">
<input type="number">
<input type="range">

## Must belong to a group defined by the name attribute.
<input type="radio">

## Must have a unique name
<input type="checkbox">

## Nothing is displayed to user. Useful to pass info in to form submit.
<input type="hidden" name="secret" value="Something">

## Labeling:
<label>
    Name
  <input type="text">
</label>

### Connecting a label to an input: Add an id to the select wrapper if labeling
<label for="name">Name</label>
<input id="name" type="text">

## Select boxes:
Multiple attribute allows multi-select
<select name="someName" multiple>
  <option value="Banana">Banana</option>
  <option value="Cherry" selected>Cherry</option>
  <option value="Lemon" selected>Lemon</option>
</select>

## Buttons:
<button type="button">This an anonymous button</button>
<button type="submit">This a submit button</button>
<button type="reset">This a reset button</button>

## Common Attributes:
autocapitalize
autocomplete
autofocus // The default control when a page loads
checked
disabled
inputmode // Used to provide a hit to the browser for keyboard to display
maxlength
minlength
multiple // Used for multi-select
name
placeholder
pattern // A regular expression to match
required
readonly
size // Size default in pixels or if a text type control then characters
spellcheck
tabindex
value

## Form validation
Special pseudo classes called :invalid and :valid will allow you to stylize the form inputs

Look into libraries for form validation - best practice

Strip out all non-digits using regex - string.replace(/[^\d]/g, '');

document.forms;           // Get all forms on a page
form.elements;            // Get all form elements
input.type.toLowerCase(); // Get input type (radio, checkbox, text, etc.)
input.value;              // Get input value
input.name;               // Get input name
input.checked;            // Get the checked status of a checkbox or radio button
input.disabled;           // Get input disabled status

### To capture the submit event:
Use this because it captures the enter key as well as submit click

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    // do entire form validation here

    // if the validation fails, call to stop form from submitting
    event.preventDefault();
});

Always perform server-side javascript validation to prevent browser manipulation from submitting forms without html validation.
