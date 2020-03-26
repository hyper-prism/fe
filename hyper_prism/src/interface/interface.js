import React from 'react'
import '../styles/interface.css'

export default class Interface extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nums: {
                button1: {number: 1, name: 'button1'},
                button2: {number: 2, name: 'button2'},
                button3: {number: 3, name: 'button3'},
            },
            score: 0, 
            turns: 0
            }
    }

    buttonHandler = (e)  => {
        let selectedNum = 0
        for(let item in this.state.nums){
            if(item !== e.name){
                document.querySelector(`.${item}`).style.background = 'black'
            }                  
            document.querySelector(`.${e.name}`).style.background = 'green'
            selectedNum = e.number            
        }
        this.submitHandler(selectedNum, this.state.score)
    }

    submitHandler = (num, score) => {
        let random = Math.floor(Math.random() * 3) + 1; 

        if(random === num){
            score = score += 1
        } else if(random !== num){
            score = score -= 1
        }
        this.prismHandler(score)

        this.setState({
            score: score,
            turns: this.state.turns + 1
        })
    }

    prismHandler = (score) => {
        if(score === 0){
            this.updatePrism('100px', 'green', '50px')
        } else if(score === 1){
            this.updatePrism('150px', 'teal', '75px')
        } else if(score === 2){
            this.updatePrism('200px', 'white', '100px')
        } else if(score === 3){
            this.winLossHandler('400px', 'white', '200px', true)            
        } else if(score === -1){
            this.updatePrism('50px', 'maroon', '25px')
        } else if(score === -2){
            this.updatePrism('24px', 'purple', '12px')
        } else if(score === -3){
            this.winLossHandler('12px', 'black', '6px', false)
        } 
    }

    updatePrism = (bb, color, borderLR,) => {
        let prism = document.querySelector('.triangle')
        prism.style.borderBottom = `${bb} solid ${color}`;
        prism.style.borderLeft = `${borderLR} solid transparent`;
        prism.style.borderRight = `${borderLR} solid transparent`;
        prism.style.transition = "3s";
    }

    winLossHandler = (bb, color, borderLR, result ) => {
        let prism = document.querySelector('.triangle')
        prism.style.borderBottom = `${bb} solid ${color}`;
        prism.style.borderLeft = `${borderLR} solid transparent`;
        prism.style.borderRight = `${borderLR} solid transparent`;
        prism.style.transition = "6s";
        prism.style.opacity = "0";

        if(result){
            console.log('winner')
        } else {
            console.log('loser')
        }
    }


    render(){        
        console.log(this.state.score)
        return(
            <div>
                <h1 class="header">Hyper Prism</h1>
                <hr style={{width:'100%', borderBottomColor: 'green', boxShadow: "1px 2px 2px 1px green"}} /> 
                <div class="container">
                    <div className="triangle"></div> 
                </div> 
                <div className='controls-container'> 
                    <div class="numbers"> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button1)}>
                            <h1 className="choice1 button1">I</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button2)}> 
                            <h1 class="choice1 button2" >II</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button3)}> 
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



