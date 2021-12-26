import React, { Component } from 'react';
import Computer from './computer';
import KetQua from './KetQua';
import Player from './player';
import { connect } from 'react-redux';
import './style.css';
class OanTuXi extends Component {
    render() {
        return (
            <div>
                <div className="gameOanTuXi">
                    <div className="row text-center mt-3">
                        <div className="col-4">
                            <Player/>
                        </div>
                        <div className="col-4">
                            <KetQua/>
                            <button onClick={()=>{
                                this.props.playGame();
                            }}className='btn btn-success'>Play Game</button>
                        </div>
                        <div className="col-4">
                            <Computer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        playGame: ()=>{
            let count=0;
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type:'RAN_DOM',
                })
                count++;
                if(count>=10){
                    clearInterval(randomComputerItem);
                    dispatch({
                        type:'END_GAME',
                    })
                }
            },100)
        }
    }
}
export default connect(null,mapDispatchToProps)(OanTuXi);