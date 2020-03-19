import React from 'react'

export default class Interface extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1 class = "header">Hyper Prism</h1>
                <div class = "container">
                    <div class = "triangle"></div> 
                </div> 
                <div class = "controls">
                    <button onClick = "submit();">Submit</button>
                    <input placeholder = "Enter Guess" class = "input"></input>
                    <button class = "restart">Restart</button>
                </div> 
                <div class = "numbers"> 
                    <h2 class = "choice1" onClick = "button1();"> 1 </h2>
                    <h2 class = "choice2" onClick = "button2();"> 2 </h2>
                    <h2 class = "choice3" onClick = "button3();"> 3 </h2>
                </div>     
                <div class = "round2">Begin Next Round</div> 
            </div> 
        )
    }
}