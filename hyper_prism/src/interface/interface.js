import React from 'react'
import '../styles/interface.css'

export default class Interface extends React.Component{
    constructor(){
        super()
        this.state = {
            button1: '1',
            button2: '2',
            button3: '3'
        }
    }

    buttonHandler = event => {
        console.log(event.value)
    }   

    submitHandler = () => {

    }

    render(){
        console.log(this.state.button1)

        return(
            <div>
                <h1 class="header">Hyper Prism</h1>
                <div class="container">
                    <div class="triangle"></div> 
                </div> 
          
                    <div class = "numbers"> 
                        <div>
                            <h1 class="choice1">I</h1>
                        </div> 
                        <div> 
                            <h1 class="choice1" value='1'>II</h1>
                        </div> 
                        <div> 
                            <h1 class="choice1">III</h1>
                        </div> 
                    </div>    
                    <div class= "round2">Begin Next Round</div> 
            </div> 
        )
    }
}



