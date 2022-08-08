- [Interview Questions on React](#interview-questions-on-react)
  - [What is DOM?](#what-is-dom)
  - [What is the difference between absolute and relative position?](#what-is-the-difference-between-absolute-and-relative-position)
  - [What are closures in Javascript?](#what-are-closures-in-javascript)
  - [Differentiate ES5 to ES6](#differentiate-es5-to-es6)
  - [Differentiate from forEach and map array methods](#differentiate-from-foreach-and-map-array-methods)
  - [What is the difference between class and function components in React?](#what-is-the-difference-between-class-and-function-components-in-react)
  - [useMemo and useCallback hooks](#usememo-and-usecallback-hooks)
  - [How to pass data from child to parent component in React?](#how-to-pass-data-from-child-to-parent-component-in-react)
  - [How to make application perfomance?](#how-to-make-application-perfomance)
  - [What are the different life cycles methods of React?](#what-are-the-different-life-cycles-methods-of-react)
  - [What is the difference between ContextAPI and Redux?](#what-is-the-difference-between-contextapi-and-redux)
  - [What is a state?](#what-is-a-state)
  - [On hooks](#on-hooks)
    - [useEffect](#useeffect)

# Interview Questions on React

## What is DOM?

DOM stands for Document Object Model and it is the structure of a web page. It represents all page content as objects that can be modified.

The `document` object is the main "entry point" to the page. We can change and create anything on thje page using it.

## What is the difference between absolute and relative position?

These are two CSS position values. There should be a relative parent element to a absolute child element and this child element can be positioned within its relative parent. A relative element can be positioned relatively to its position and a absolute element can be positioned relatively to its relative parent.

## What are closures in Javascript?

Closures are function that can access data oustide of the function. It can reference variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

```js
let name = "Jack";

function greeting() {
  let message = "Hi";

  console.log(message + " " + name);
}
```

## Differentiate ES5 to ES6

The major difference between those two versions of EcmaScript is that ES6 introduced new keywords `let` and `const`, arrow functions and destructuring.

## Differentiate from forEach and map array methods

The `forEach` and the `map` methods can be used to transform elements in an array.

If used to trasform elements we can say that the main difference between those two is that a `map` returns an array with the transformed elements while a `forEach` map does not.

The `forEach` method can also be used to iterate over elements in an array and execute a function once per element.

## What is the difference between class and function components in React?

Functional components are a newer way of writing code in React with a simpler and cleaner syntax that allows the use of _hooks_ like `useState`, `useEffect`. The logic behind component _mount_, _unmount_ and _database_ are gathered into a single _hook_.

Functional components are not only easier to write but also lighter than class component.

## useMemo and useCallback hooks

The `useMemo` hook returns a _memoized_ **value**. _Memoization_ is an optimization technique that speeds up computer programs by **storing** the results of expensive functions calls and **returning the cached result** when the same input occur again.

It keeps a track of the last computed value and whenever the dependency of its array changes it returns the last memoized value.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

The `useCallback` returns a _memoized_ **callback**. React will only calculate the callback when arguments in the dependency array are changed. This is usefull when callbacks are used in child components that need the same reference so unnecessary rendering is avoided.

```jsx
const doCallback = useCallback(() => {
  console.log("useCallback");
}, []);
```

## How to pass data from child to parent component in React?

Even though this is not recommended it is possible to pass data from child to parent using a callback function on parent component that stores the values when child component renders the data.

```jsx
const Child = (props) => {
  const person = {
    name: "Lacy",
    age: 20,
  };

  const handleButtonClick = () => {
    props.passData(person);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show data</button>
    </div>
  );
};

function App() {
  const [childData, setChildData] = useState({ name: "", age: 0 });

  const passData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <Child passData={passData} />
      <p>
        The data from Child component is: {childData.name} and {childData.age}.
      </p>
    </div>
  );
}
```

## How to make application perfomance?

If we have a list of items and we want to render it on screen it would be better to use infinite scrolling inseatd of rendering all items at once. If we are working with images, we could use low resolution thumbnails and then when the user clicks on it the actual image is loaded.

## What are the different life cycles methods of React?

## What is the difference between ContextAPI and Redux?

**Redux** is a state manager. It sits on the top of the application and knows about the state of any application component. It can access the data from Redux via **actions** or **reducers** or you can get a slice of any state from Redux because it has a single store. **Actions** are plain JavaScript objects that has a `type` field The `type` field should be a string that gives this action a descriptive name. As a convention this name is usually a string like `"domain/eventName"`. An action object can have other fields with additional information about what happened. Also by convention we put that information in a field called `payload`. An **action** is an event that described something that happened in the application.

```jsx
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk",
};
```

**Reducers** are the only way to update the state. It receives the current `state` and an `action` object, decides how to update the sate if necessary and returns the new state: `(state, action) => newState`. It is similar to an event listener which handles events based on the received action (event) type.

**ContextAPI** has two steps: a provider and a consumer. The data can be provided at the top of the application and then any component can consume it. It can be used for authentication properties.

## What is a state?

A state is a Javascript value that updates (or re-render) when a new value is triggered into this variable.

## On hooks

### useEffect
