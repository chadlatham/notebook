#Introduction to React
##Explain what React is.
React is a JavaScript library for building sophisticated user interfaces for large, dynamic web applications. As you know, a sophisticated user interface can be hard to build and maintain. Facebook created React to try to make this process easier and faster. What's interesting about React is how different it is compared to other JavaScript solutions. In fact, React has the entire industry rethinking how to approach user interface development.

A component has 3 pieces: Presentation - HTML, State - JS, Behavior - JS

Thinking about web applications as a component hierarchy is incredibly powerful because it mirrors the hierarchical nature of the DOM. And although components have a fair number of moving parts, they're incredibly fun to use once you get the hang of React.

It uses one-way data-binding which reduces load on the client device and prevents loops unless explicitly created.

##Explain why React is important.
When it was released in March 2013, React's approach to user interface development, using a hierarchy of components and one-way data binding, was strange and unconventional. However, developers have begun to understand the power in these techniques. And as a result, many client-side tools, including Angular, are adopting component hierarchies and one-way data binding too, helping to make them ordinary and conventional.

Though its concepts aren't fully mainstream, React is accessible to a wide range of developers of varying experience levels.

React can be gradually adopted for small features and doesn't require an entire application to be rewritten with it.

Well-designed React components can be composed together even if they're built by different people.

When something goes wrong, React provides breadcrumbs to trace the mistake to the source of the problem.

Why it's important discussion:
  - It's changing the way the industry (Angular) works with 1-way data binding.
  - It can be adopted gradually instead of requiring full buy-in.
  - It is popular in the Seattle area - where we are going to work!
  - It is easier to adopt for beginners.
  - Componenets are composable.
  - Breadcrumbs help identifying location of mistakes.

##Build a user interface with React.
How I think React is working:
The default HTML and DOM render, then the React and React-DOM scripts load, then a container is identified and passed to the React renderer. React's renderer rebuilds the existing DOM using dynamic content - wiping any contents of the container on initialization.

<script>
  ReactDOM.render(
    React.createElement('h1', null, 'Hello world'),
    document.getElementById('hello')
  );
</script>

<script>
  const Hello = React.createClass({
    render: function() {
      return React.createElement('h1', null, 'Hello world');
    }
  });

  ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('hello')
  );
</script>

The specification object must implement a render() function that returns a single ReactElement.

React.createElement() will either generate a react element that's a DOM node or it will create a custom class.

render: must be a function that returns a single React element
getInitialState: must be a function that returns an object (the obj properties).
// This properties of the object can be accessed by this.state.prop

Component classes can also define a getInitialState() function. It's invoked once, and only once, right before the component is mounted or inserted into the DOM. The function's return value is used as the initial value of this.state.

After the getInitialState() function is invoked, React will invoke the render() function which should be implemented as a pure function. In other words, it should: (Pure functions should always have the same output for a given input.)

Return the same ReactElement given the same component state.
Not modify the component's state.
Not read from or write directly to the DOM.
Not interact with the browser via functions like setTimeout().
React provides other places where you can modify state or interact with the browser. Just not in the render() function. Keeping the render() function pure makes component classes easier to think about.

React.createElement('elemen', propObj, child1, child2...);
prop object must be in camelCase. for and class are special cases. (htmlFor, className)

A well-designed component will store the least amount of information possible in its this.state object. Then, inside the render() function, it computes other necessary information for the user interface based on its this.state. Adding redundant, precomputed values into the this.state object means you'll have to write code that explicitly keeps everything synchronized.
