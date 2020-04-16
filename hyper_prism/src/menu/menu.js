import React from 'react' 
import '../styles/menu/menu.css'
import {NavLink} from 'react-router-dom'



export default class Menu extends React.Component{
    constructor(){
        super()
        this.state = {
            nums: {
                button1: {number: 1, name: 'button1'},
                button2: {number: 2, name: 'button2'},
                button3: {number: 3, name: 'button3'},
            }
        }
    }

    buttonHandler = (e)  => {
        for(let item in this.state.nums){
            if(item !== e.name){
                document.querySelector(`.${item}`).style.background = 'black'
            }                  
            document.querySelector(`.${e.name}`).style.background = 'green'
        }
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
                    <h2 style={{color: 'white', textDecoration: 'underline'}}>Menu</h2>
                    <div className='box'>
                        <NavLink  style={{textDecoration: 'none'}} to='Register'><p>-How To Play-</p></NavLink>
                    </div>
                    <div className='box'>
                        <p>Hall of Records</p>
                    </div> 
                        <div className='box'><p>Join</p></div>                        
                    <div className='box'>
                    <NavLink  style={{textDecoration: 'none'}} to='register'>
                        <p>Contact</p> 
                    </NavLink>
                    </div>  
                </div>
                </div>  
                <div className='controls-container'> 
                    <div className="numbers"> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button1)}>
                            <h1 className="choice1 button1">I</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button2)}> 
                            <h1 className="choice1 button2" >II</h1>
                        </div> 
                        <div onClick={this.buttonHandler.bind(this, this.state.nums.button3)}> 
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