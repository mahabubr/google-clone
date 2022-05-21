import React from "react";
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import './global.css'

import { ResultContextProvicer } from './Contexts/ResultContextProvider'

ReactDom.render(
    <ResultContextProvicer>
        <Router>
            <App />
        </Router>
    </ResultContextProvicer>,
    document.getElementById('root')
);