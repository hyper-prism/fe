import React from 'react';
import Interface from './interface/interface'
import Register from './forms/register'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
    return (
        <div>
            <Route exact path = '/' component={Interface}/>
            <Route exact path = '/Register' component={Register} />
        </div>
    );
}

export default App;
