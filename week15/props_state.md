#Props and State
##Explain what props are.
Props are data that's passed into a component when it's created. For example, you can use props to pass in HTML attributes when creating a native HTML component.

Additionally, props are immutable, or unchangeable, data that configures a new component before it's mounted (i.e. inserted into the DOM hierarchy). Props are accessible anywhere inside a component class via the this.props object. After a component's props are set, they never change.


##Explain what state is.
State is data that's initialized and changed from within a component. State is initialized by a component's getInitialState() method which is automatically invoked once before a component is mounted. Once initialized, state is accessible anywhere inside a component class via the this.state object.

Additionally, state is mutable, or changeable, data that represents the internal state of a component. To mutate state, you use the this.setState() method which is typically done after an event handler is triggered from a user interaction or a server response.


##Explain why props and state are important.
Props and state are important because they're implicit inputs to the render() method. React invokes a component's render() method whenever it's mounted or its state is changed. Using one-way data binding, a component's props, state, and presentation logic are combined into a user interface.

Mounting Process: <Component> --> Props & State --> Render --> Insert

The process of calculating and applying differences is called reconciliation and is one of the primary reasons why React is so performant. Once updating the DOM hierarchy is complete, React holds onto the new component hierarchy for the next reconciliation round. A component's reconciliation process is easier to understand when its render() method is implemented as a pure function. In other words, it should:

Return the same component hierarchy given the same props and state objects.
Not modify the component's state directly or with the this.setState() method.
Not read from or write directly to the DOM.
Not interact with the browser via functions like setTimeout().

A stateful component may have props but it definitely has state. Typically, a stateful component is at or near the root of a component hierarchy and is responsible for managing the majority of the hierarchy's state. Clearly stateful components are a requirement for interactivity. However, the fewer stateful components a hierarchy has, the easier it is to understand how information flows through it.

A stateless component often has props but it definitely has no state. Typically, a stateless component is at or near the leaves of a component hierarchy and is responsible for handling the majority of the hierarchy's events. A typical component hierarchy has more stateless components than stateful components, especially if it creates a user interface with lots of events.

##Use props and state to separate the concerns of a React user interface.




##Explain how information flows between stateful and stateless components.
On a stateful component (higher up in the component heirarchy), information from the state flows downward towards leaf nodes from the state or props through props of owned components. The stateless components may pass their props to owned components through their props.

Stateless components flow information back to the stateful component through state mutator functions (call backs) that are passed themselves as props to the stateless components. The stateless components invoke these functions and pass information as arguments to the stateful components.

Being stateful, an <App /> component is only responsible for managing a component hierarchy's state. While it could also handle a hierarchy's events, it follows the single responsibility principal and delegates the additional responsibility to the stateless components that it owns. In React, an owner is a component that sets the props of another component. The following code snippet illustrates the owner-ownee relationship between an <App /> component and its <Track /> components.


### This construct, specifically the Object.assign part allows you to increase the performance of React. Specifically, do not update an object in an array stored in state; replace the entire array with a new one that contains the old objects that weren't modified and a new object that has been modified.

incrementLikes(track) {
    const nextTracks = this.state.tracks.map((element) => {
      if (track !== element) {
        return element;
      }

      const nextLikes = track.likes + 1;

      const nextTrack = Object.assign({}, track, { likes: nextLikes });

      return nextTrack;
    });

    this.setState({ tracks: nextTracks });
  }

This tactic of copying key-value pairs is part of a immutable data modeling strategy. An immutable data model is an entity or collection (e.g. object or array) whose state cannot be changed after it's created. Though it requires a bit more work on your part, an immutable data model for a stateful component can lead to significant performance gains when re-rendering a component hierarchy.

In this section, we've covered a bunch of technical information about how information flows between stateful and stateless components. To summarize:

A stateful component's state and state mutators are passed to a stateless component's props.
A stateless component's props are combined with presentation logic to render a user interface.
An event is handled by invoking a stateless component's event handler.
A stateless component's event handler is processed by invoking a stateful component's state mutator.
A stateful component's state mutator is resolved by changing its state.
Repeat step 1.

Effectively, this process is another form of one-way data binding. The only difference is that it involves multiple components with separate concerns.
