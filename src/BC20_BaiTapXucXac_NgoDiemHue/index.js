import React, { Component } from 'react';
import ThongTinTroChoi from './ThongTinTroChoi';
import XucXac from './XucXac';
import { connect } from 'react-redux';
class BaiTapXucXac extends Component {
    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-title text-center display-3">
                        Game xúc xắc
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-5">
                            <button onClick={()=>{
                                this.props.datCuoc(true);
                            }}className="btnGame">TÀI</button>
                        </div>
                        <div className="col-2">
                            <XucXac/>
                        </div>
                        <div className="col-5">
                            <button onClick={()=>{
                                this.props.datCuoc(false);
                            }}className="btnGame">XỈU</button>
                        </div>  
                    </div>  
                    <div className="ThongTinTroChoi text-center">
                        <ThongTinTroChoi/>
                        <button onClick={()=>{
                            this.props.playGame();
                        }}className="btn btn-success p-3 display-4 mt-5">Play Game</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        datCuoc: (taiXiu)=>{
            let action = {
                type:'DAT_CUOC',
                taiXiu
            };
            dispatch(action);
        },
        playGame: ()=>{
            dispatch({
                type: 'PLAY_GAME',
            });
        },
        
    };

}
export default connect(null,mapDispatchToProps)(BaiTapXucXac)