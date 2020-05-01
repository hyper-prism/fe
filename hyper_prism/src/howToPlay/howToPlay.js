import React from 'react'
import {NavLink} from 'react-router-dom'

export default class HowToPlay extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div> 
                <div> 
                    <h1 className="header">Hyper Prism</h1>
                    <hr style={{width:'100%', borderBottomColor: 'green', boxShadow: "1px 2px 2px 1px green", marginBottom: '0px'}} /> 
                </div> 
                    <div className='menu-container'>
                        <h3>How To Play</h3>
                        <hr/> 
                        <p>1) Select a number at the bottom of the screen</p> 
                        <p>2) The computer will simultaneously select a number</p> 
                        <p>3) If your number is the same as the computers selection, your hyper prism grows.</p> 
                        <p>4) If it's not the same, your hyper prism fades away</p> 
                        <p>5) Once big enough, you'll be able to suspend your hyper prism, meaning you've won the round.</p> 
                        <p>6) Careful! If your hyper prism gets too small, it just may float away</p> 
                        <p>7) Based on how many attempts it takes to complete the round, a score will be created</p> 
                        <p>8) Anything beyond 9 attempts will be awarded a 1</p>
                        <p>9) Anything less that 9 attempts is awarded the current attempt deducted from 9 (ex. 9 - 3 = 6, because I won in 3 attempts).</p> 
                        <p>10) If you do not win a round, no points are awarded.</p> 
                        <p>11) Only those who create an account will have their high scores logged to the leader board.</p> 
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