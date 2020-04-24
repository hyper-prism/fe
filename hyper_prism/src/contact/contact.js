import React from 'react' 

export default class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    changeHandler = () => {

    }

    submitHandler = () => {

    }
    
    render(){
        return(
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
                <div type='submit' onClick={this.clickHandler}>Submit</div> 
            </form> 
        )
    }
}