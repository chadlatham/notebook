#Angular Events & Form Validation



##Explain the difference between jQuery thinking and Angular thinking
Imperative programming is issuing commands like registering event handlers.
jQuery is imperative.

Declarative programming is wiring front end elements to functions.
Angular is declarative.

##Construct Angular event handlers using:
  - ng-change
  - ng-mousedown
  - ng-mouseenter
  - ng-mouseleave
  - ng-mousemove
  - ng-mouseover
  - ng-mouseup
  - ng-click
  - ng-mouseenter
  - ng-submit

##Explain why we validate on the client side
Because client side validation can be easily overridden.

##Implement form validation using Angular's form validation features.


When does a form/input have a property of $valid? What class accompanies this property?
When the all of the validation requirements have been met.
ng-valid

When does a form/input have a property of $invalid? What class accompanies this property?
When at least one of the validation requirements has not been met.
ng-invalid

When does a form/input have a property of $pristine? What class accompanies this property?
When an input has never had text entered.
ng-pristine

When does a form/input have a property of $dirty? What class accompanies this property?
Once data has been entered.
ng-dirty

When does a form/input have a property of $touched? What class accompanies this property?
When an input or form has been blurred.
ng-touched

What does blurred mean? (research the blur event)
Blurred means to lose focus.

Create a text input with a name of "question" and give it a validation of "required". If it is $valid add a class of "valid"
<input name="question" ng-class="{'valid' : myForm.question.$valid }"

For your text input with a name of question, add a paragraph tag with the text "please enter a valid question" if the input is not valid


Create a text input with a name of "answer" and give it a validation of "required" and a minimum length of 4 characters. If it is $valid and not $pristine add a class of "correct".


How would you access all of the errors (in an object) for an input with a name of quizForm.username


What validations would you add in an input to make sure that there is a minimum length of 4 and a maximum length of 20


What validation would you add in an input to make sure that only numbers between 1 and 5 are a valid input (use regular expressions for this!)
