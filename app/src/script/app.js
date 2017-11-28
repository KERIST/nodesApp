import React from 'react';
import ReactDOM from 'react-dom';

require('../style/styles.scss');

var NodesApp = require('./components/NodesApp/NodesApp.jsx');

ReactDOM.render(<NodesApp />, document.querySelector('#app'));

