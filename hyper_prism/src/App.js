import React from 'react';
import Interface from './interface/interface'
import Register from './forms/register'
import {Route} from 'react-router-dom'
import Login from './forms/login'
import './App.css';

function App() {
    return (
        <div>
            <Route exact path = '/' component={Interface}/>
            <Route exact path = '/Register' component={Register} />
            <Route exact path = '/Login' component={Login} /> 
        </div>
    );
}

export default App;
