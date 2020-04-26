import React from 'react' 
import {NavLink} from 'react-router-dom'
import '../styles/forms/register.css'


export default class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
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
            <div>
                <div>
                    <h1 className="header">Hyper Prism</h1>                
                    <hr style={{width:'100%', borderBottomColor: 'green', boxShadow: "1px 2px 2px 1px green", marginBottom: '0px'}} /> 
                </div>
                <div className='grand-container'>
                    <div className='menu-container'>
                        <h3>Contact</h3>
                        <form>
                            <input name='name'
                                   placeholder='Name'
                                   onChange={this.changeHandler}
                                   value={this.state.name}
                                   type='text'/>
                            <input name='email'
                                   placeholder='Email'
                                   onChange={this.changeHandler}
                                   value={this.state.email}
                                   type='text'/>
                            <textarea name='message'
                                      placeholder='Message'
                                      onChange={this.changeHandler}
                                      value={this.state.message}
                                      type='text'/> 
                            <div type='submit' className='submit-button' onClick={this.submitHandler}>Submit</div> 
                        </form> 
                    </div>
                </div>
                <div className='controls-container'> 
                    <div className="numbers"> 
                        <div>
                            <h1 className="choice1 button1">I</h1>
                        </div> 
                        <div> 
                            <h1 className="choice1 button2" >II</h1>
                        </div> 
                        <div> 
                            <h1 className="choice1 button3">III</h1>
                        </div> 
                    </div>  
                    <div className="controls">
                        <div onClick={this.restartHandler} className="restart">Restart</div>
                        <div type='submit'><NavLink style={{textDecoration: "none", fontWeight: "800", color: "white"}} to='/'>Return</NavLink></div>
                    </div>
                </div>   
            </div> 
        )
    }
}