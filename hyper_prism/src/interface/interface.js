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
        console.log(random)
        if(random === num){
            score = score + 1
            turns = turns + 1
            if(score === 1){
                this.updatePrism('150px', 'blue', '100px', '100px')
            } else if(score === 2){
                this.updatePrism('150px', 'blue', '100px', '100px')
            } else if(score === 3){
                this.updatePrism('150px', 'blue', '100px', '100px')            } 
            this.setState({
                score: score,
                turns: turns
            })

        } else if(num !== random){
            score = score -= 1
            if(score === -1){
                this.updatePrism('150px', 'blue', '100', '100')

            } else if(this.state.score === -2){
                document.querySelector('.triangle').style.background = 'blue'
            } else if(this.state.score === -3){
                document.querySelector('.triangle').classList.add('wrong-3')
            } 
            this.setState({
                score: score
            })
        }
    }

    updatePrism = (bb, color, borderLR,) => {
        let prism = document.querySelector('.triangle')
        prism.style.borderBottom = `${bb} solid ${color}`;
        prism.style.borderLeft = `${borderLR} solid transparent`;
        prism.style.borderRight = `${borderLR} solid transparent`;
        prism.style.transition = "3s";
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



