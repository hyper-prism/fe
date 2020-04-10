import React from 'react'
import '../styles/forms/register.css'
import axios from 'axios' 

export default class Login extends React.Component{
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

        axios.post(process.env.REACT_APP_LOGIN, this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log("There was an error logging you")
            })
    }
    
    render(){
        return(
            <div className='container'> 
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
            </div> 
        )
    }
}