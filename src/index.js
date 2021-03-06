//JS modules encapsulates all code written, in separate files, is separated from other code that is written
//need to explicitly state what we want to access

import React from 'react'; //import React(library, diverging into 2 separate libraries) as a JS module
import ReactDOM from 'react-dom'; //helps take component and insert it into DOM
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//component or view: something that writes html, multiple different components
//what i want to happen:
//1. create new component and it should porduce html

//2. take component's html and put it on the page
