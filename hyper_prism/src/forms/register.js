import React from 'react'
import '../styles/forms/register.css'

export default class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password: ''

        }
    }

    changeHandler = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    
    render(){
        return(
            <form>
                <input placeholder='Username' 
                       name='username' 
                       value={this.state.username} 
                       onChange={this.changeHandler}
                       type='text'
                />
                <input placeholder='Email'
                       name='email'
                       type='text'
                       onChange={this.changeHandler}
                       value={this.state.email}
                />
                <input name='password'
                       type='password'
                       placeholder='Password'
                       value={this.state.password}
                       onChange={this.changeHandler}
                />
                <div onClick={this.submitHandler}>Submit</div>
            </form>
        )
    }
}