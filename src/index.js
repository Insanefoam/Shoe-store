import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './data';

ReactDOM.render(<App shoesData={data}/>, document.getElementById('root'));