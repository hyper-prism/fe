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
                        <h3 style={{marginBottom: '0px'}}>How To Play</h3>
                        <div style={{overflow: 'scroll', height: '400px', width: '80%'}}> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Select a number at the bottom of the screen</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>The computer will simultaneously select a number</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>If your number is the same as the computers selection, your hyper prism grows.</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>If it's not the same, your hyper prism fades away</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Once big enough, you'll be able to suspend your hyper prism, meaning you've won the round.</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Careful! If your hyper prism gets too small, it just may float away</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Based on how many attempts it takes to complete the round, a score will be created</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Anything beyond 9 attempts will be awarded a 1</p>
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}>Anything less that 9 attempts is awarded the current attempt deducted from 9 (ex. 9 - 3 = 6, because I won in 3 attempts).</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}> If you do not win a round, no points are awarded.</p> 
                            <p style={{textAlign: 'left', fontSize: '12px', fontWeight: 'bold'}}> Only those who create an account will have their high scores logged to the leader board.</p> 
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