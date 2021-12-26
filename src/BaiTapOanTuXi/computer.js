import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        return (
            <div className='player-game'>
                <div className="theThink">
                    <img style={{transform:'rotate(180deg)'}} width={80} height={100}src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{width:200,height:200}}src="./OanTuTi/playerComputer.png" alt="player"></img>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        computer:state.OanTuTiReducer.computer
    }
};
export default connect(mapStateToProps)(Computer);