import React from 'react';
import Interface from './interface/interface'
import Register from './forms/register'
import {Route} from 'react-router-dom'
import Login from './forms/login'
import axios from 'axios'
import './App.css';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            userID: '',
            loggedIn: false,
            leaderBoard: []
        }        
}

componentDidMount(){
    axios.get(process.env.REACT_APP_USERS)
        .then(response => {
            response.data.map(item => {
                if(item.username === localStorage.getItem('username')){
                    this.setState({
                        username: item.username,
                        userID: item.id,
                        loggedIn: true
                    })
                }
            })
        })
        .catch(error => {
            console.log("There was an error gathering your data", error)
        })
        this.leaderStats()
}

leaderStats = () => {
    axios.get(`${process.env.REACT_APP_USERSTATS}`)
        .then(response => {
            this.setState({
                leaderBoard: response.data.sort((a, b) => a.score > b.score ? 1 : -1 )
            })
        })
        .catch(error => {
            console.log("There was an error retrieving your data", error)
        })
}

   
    render(){
        return (
            <div>
                <Route exact path = '/' render={props => (
                    <Interface {...props} userInfo={this.state} leaderBoard={this.state.leaderBoard}/>
                )}/>
                <Route exact path = '/Register' component={Register} />
                <Route exact path = '/Login' component={Login} /> 
            </div>
        );
    }
}

export default App;
