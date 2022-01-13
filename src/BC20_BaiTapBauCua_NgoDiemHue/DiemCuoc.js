import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function DiemCuoc(props) {
    const tongDiem = useSelector(state => state.BaiTapBauCuaReducer.tongDiem);
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className='text-center display-4' style={{color:'green'}}>GAME BẦU CUA CYBERLEARN</h3>
            <div className='text-center mt-4'>
                <span style={{fontSize:'24px'}} className='p-2 text-white bg-danger rounded'>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>
            </div>
            <div className='text-center mt-4'>
            <button style={{fontSize:'24px'}} className='p-2 text-white btn btn-success rounded' onClick={()=>{
                dispatch({
                    type: 'CHOI_LAI',
                })
            }}>Chơi lại</button>
            </div>
        </div>
    )
}
