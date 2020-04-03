import React from 'react'
import axios from 'axios'
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
        
        axios.post(process.env.REACT_APP_REGISTER, this.state)
            .then(response => {
                this.setState({
                    username: '',
                    email: '',
                    password: ''                   
                })
                this.props.history.push('/login')
                console.log(response)
            })
            .catch(error => {
                console.log("There was an error registering your account", error)
            })
    }
    
    render(){
        return(
                <form>
                    <h3>Create an account</h3>

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
                    <div  className='form-button' onClick={this.submitHandler}>Submit</div>
                </form>
        )
    }
}