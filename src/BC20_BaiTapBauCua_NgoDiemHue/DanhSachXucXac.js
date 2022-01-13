import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux';
export default function DanhSachXucXac(props) {
    const mangXucXac = useSelector(state => state.BaiTapBauCuaReducer.mangXucXac);
    const dispatch = useDispatch();
    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{ width: 380, height: 350, borderRadius: '50%' }}>
                <div className='row pr-5'>
                    <div className='col-12 text-center '>
                        <XucXac xucXac={mangXucXac[0]}/>
                    </div>
                    <div className='col-6 text-center text-right'>
                        <XucXac xucXac={mangXucXac[1]}/>
                    </div>
                    <div className='col-6 text-center'>
                        <XucXac xucXac={mangXucXac[2]}/>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-success' style={{fontSize: 25}} onClick={()=>{
                    dispatch({
                        type: 'PLAY_GAME_BAU_CUA',
                    })
                }}>Xốc</button>
            </div>
        </div>
    )
}
