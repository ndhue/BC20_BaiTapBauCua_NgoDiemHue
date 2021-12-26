import React, { Component } from 'react';
import { connect } from 'react-redux';
class Player extends Component {
    render() {
        return (
            <div className='player-game'>
                <div className="theThink">
                    <img width={80} height={100} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc===true).hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{width:200,height:200}}src="./OanTuTi/player.png" alt="player"></img>

                <div className='row'>
                    {this.props.mangDatCuoc.map((item,index)=>{

                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'};
                        }

                        return <div className='col-4' key={index}>
                        <button onClick={()=>{
                            this.props.datCuoc(item.ma);
                        }} style={border}className='btnItem'>
                            <img width={30} height={25}src={item.hinhAnh} alt={item.hinhAnh}></img>
                        </button>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        mangDatCuoc: state.OanTuTiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        datCuoc: (maCuoc)=>{
            dispatch({
                type:"CHON_KEO_BUA_BAO",
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);