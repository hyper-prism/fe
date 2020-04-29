import React from 'react'
import {NavLink} from 'react-router-dom'

export default class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        console.log(this.props.leaderBoard)
        return(
            <div>
                <div>
                    <h1 className="header">Hyper Prism</h1>                
                    <hr style={{width:'100%', borderBottomColor: 'green', boxShadow: "1px 2px 2px 1px green", marginBottom: '0px'}} /> 
                </div>
                    <div className='menu-container' >
                        <h2 style={{color: 'white', textDecoration: 'underline'}}>Hall of Records</h2>
                        <div style={{width: '100%', overflow: 'scroll', height: '400px'}}> 
                        {this.props.leaderBoard.map((item, index) => (
                            index < 20 ?
                                <div key={index} style={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <p>{item['users.username']}</p> 
                                    <p style={{color: 'white'}}>{item.score}</p>
                                </div>                                 
                            : 'loading'

                        ))}
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