import React from "react";

const Blog = () => {
  return (
    <div className="container my-3">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the purpose of react router?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              ReactJS Router is mainly used for developing Single Page Web
              Applications. React Router is used to define multiple routes in
              the application. When a user types a specific URL into the
              browser, and if this URL path matches any 'route' inside the
              router file, the user will be redirected to that particular route.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does context api works?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              useRef hook details
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly. Accessing DOM Elements In general, we want to let React
              handle all DOM manipulation. But there are some instances where
              useRef can be used without causing issues. In React, we can add a
              ref attribute to an element to access it directly in the DOM.
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 p-3 border border-dark rounded">
        <h3>What is the purpose of react router?</h3>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="my-3 p-3 border border-dark rounded">
        <h3>How does context api works?</h3>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="my-3 p-3 border border-dark rounded">
        <h3>useRef hook details</h3>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly. Accessing
          DOM Elements In general, we want to let React handle all DOM
          manipulation. But there are some instances where useRef can be used
          without causing issues. In React, we can add a ref attribute to an
          element to access it directly in the DOM.
        </p>
      </div>
    </div>
  );
};

export default Blog;
