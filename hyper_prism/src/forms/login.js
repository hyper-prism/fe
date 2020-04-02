import React from 'react'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''

        }
    }
    
    render(){
        return(
            <div>Login</div>
        )
    }
}