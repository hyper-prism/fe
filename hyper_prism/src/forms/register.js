import React from 'react'

export default class Register extends React.Component{
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
            <div>REGISTER</div>
        )
    }
}