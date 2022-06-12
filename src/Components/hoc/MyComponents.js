import React from 'react';
import withHigherOrderComponent from './withHigherOrderComponent';
import withLog from './withLog';

const MyComponent = props => <div>{JSON.stringify(props, null, 2)}</div>;

export default withLog(MyComponent);
