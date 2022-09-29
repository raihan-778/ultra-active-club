import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>
        <strong>Question:</strong> How Does React Work?
      </h2>
      <p>
        <strong>Answer:</strong> ReactJS divides the UI into isolated reusable
        pieces of code known as components. React components work similarly to
        JavaScript functions as they accept arbitrary inputs called properties
        or props. It's possible to have as many components as necessary without
        cluttering your code.
        <br />
        Returned React elements determine how the UI will look at the client
        end.One of the biggest advantages of using React is that you can infuse
        HTML code with JavaScript.
        <br />
        Users can create a representation of a DOM node by declaring the Element
        function in React.
      </p>
      <h2>
        <strong>Question:</strong> What is the difference between State And
        Porps.
      </h2>
      <p>
        <strong>Answer:</strong>Props are used to pass data from one component
        to another. The state is a local data storage that is local to the
        component only and cannot be passed to other components.
        <br />
        <strong>State:</strong>The status of a react class component instance
        can be described as an object of a collection of observed features that
        control the component’s behavior. In other words, the component’s state
        is an entity with some details that can alter during the component’s
        lifetime. This data is kept inside a component. This particular aspect
        is local or owned. The component itself uses the setStatus function to
        update the state.
        <br />
        <strong>Props</strong>React is a library focused on components that
        separate the user interface into reusable little bits. These components
        have to transmit (send data to each other) in some cases, and the way to
        transmit data among components is through props. “Props” is a special
        React keyword for proprietary purposes, used for data transmission from
        component to component. But the key part of this is the transmission of
        data with props in a uniform flow. (parent-to-child route) In addition,
        props data are read-only, meaning that parent data cannot be modified by
        child elements.
      </p>
      <h2>
        <strong>Question:</strong>What is the different use case of useEffect
        except load api data.
      </h2>
      <p>
        <strong>Answer: </strong>Here is some use case of useEffect except load
        api data.
        <br />
        <ol>
          <li>
            <strong>Running on state change:</strong> live filtering We can use
            useEffect to filter an array "on the fly" by typing letters into an
            input element. To do so, we will need to use a state to save the
            input, and a filter implementation inside the useEffect that will be
            triggered when the input changes, thanks to useEffect dependencies.
          </li>
          <li>
            <strong>
              Running on state change trigger animation on new array value:
            </strong>{" "}
            We can use the useEffect hook to trigger an animation on a shopping
            cart as a side effect of adding a new product to it. In this case,
            we'll need a state to handle the cart items, and another state to
            handle the animation trigger.
          </li>
          <li>
            <strong>
              Running on props change: update paragraph list on fetched API data
              update
            </strong>
            In this use case, we want to trigger a state update due to an
            updated fetch() call. We are sending the fetched data to a child
            component, and whenever that data is changed, the child component
            re-process it.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Blog;
