import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: true });

try {
  ReactNativeScript.start(React.createElement(MainStack, {}, null));
} catch (error) {
  console.error('Error starting the app:', error);
}

// Do not place any code after the application has been started as it will not
// be executed on iOS.