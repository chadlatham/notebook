#Data Modeling
We model data for two customers: stakeholders (the people who own the software) and developers (the people who read and use your code).

Defining the structure of our data allows use to set expectations about inputs and outputs of our software.

##Data definition
A human readable description of our data in terms of supported programming language types and other data definitions.

A simple data model:
A temperature is a number expressed in celcius - expressed in primitive type
A forecast is a non-empty array of temperatures - user defined type

#Local storage
Known as Web Storage, DOM Storage, or HTML5 Storage.
Every website domain has it's own local storage.
localStorage Object: window.localStorage
var a = 'hello';
localStorage.a = 'hello';
When you refresh the page, it retains it values. This is useful to pass information from page to page.
Local storage provides functions to get and set values. This is the recommended method. By using these methods, there are events that get triggered that may be monitored by your application. - 5mb limit on localStorage
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('ley');
localStorage.clear(); to clear all
localStorage converts everything to a string. Passing objects or arrays to local storage doesn't work natively. You must JSON.stringify() or JSON.parse() to serialize.

Using the default value syntax is critical with local storage to operate on the new variable in an expected manner. Null is returned otherwise.
To initialize: var a = JSON.parse(localStorage.getItem('a')) || [];
