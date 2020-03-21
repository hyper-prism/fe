import React from 'react'
import '../styles/interface.css'

export default class Interface extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            button1: {clicked: false, number: 1, name: 'button1'},
            button2: {clicked: false, number: 2, name: 'button2'},
            button3: {clicked: false, number: 3, name: 'button3'}
        }
    }

    buttonHandler = (e)  => {
        for(let item in this.state){
           if(item !== e.name){
               console.log(item)
               this.setState({
                   [item]: {clicked: false},
               })
           }   
        }
     console.log(e)
    }

    render(){
        console.log(this.state)

        return(
            <div>
                <h1 class="header">Hyper Prism</h1>
                <hr style={{width:'100%', borderBottomColor: 'green', boxShadow: "1px 2px 2px 1px green"}} /> 
                <div class="container">
                    <div class="triangle"></div> 
                </div> 
                <div className='controls-container'> 
                    <div class="numbers"> 
                        <div onClick={this.buttonHandler.bind(this, this.state.button1)}>
                            <h1 className="choice1 button1">I</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.button2)}> 
                            <h1 class="choice1 button2" >II</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.button3)}> 
                            <h1 class="choice1 button3">III</h1>
                        </div> 
                    </div>  
                    <div class ="controls">
                        <button class = "restart">Restart</button>
                        <button type='submit' onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>   
                <div class= "round2">Begin Next Round</div> 
            </div> 
        )
    }
}



