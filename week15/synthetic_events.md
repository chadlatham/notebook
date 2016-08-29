#Synthetic Events
##Explain what a synthetic event is.
Synthetic events are React's wrapper around native events. It is a secondary bubbling and capture phase that occurs after the DOM events complete. The React event system captures all bubbling events at the document element and then passes them to the React component heirarchy and begins capturing and bubbling anew with a synthetic event object.


##Explain why a synthetic event is important.
Primarily to provide cross-browser consistency.


##Use synthetic events to build an interactive React user interface.
