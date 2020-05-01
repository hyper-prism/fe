import React from 'react'

export default class HowToPlay extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className='leaderboard-container'>
                <h1>How To Play Hyper Prism</h1> 
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
        )
    }
}