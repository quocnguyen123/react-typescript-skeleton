import React, { FC } from 'react';

// HOC
function withLogger(Component: FC) {
  return function HigherOrderComponent(props: any) {
    console.log('Component rendered:', Component.name);
    return <Component {...props} />;
  };
}

// Component using HOC
function MyComponent(props: any) {
  return <div>Hello, {props.name}!</div>;
}

const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;