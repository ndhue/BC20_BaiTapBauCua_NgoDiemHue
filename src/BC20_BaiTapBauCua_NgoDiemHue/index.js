import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './XucXacItem.css';
export default function BaiTapBauCua() {
    return (
        <div id='BaiTapGameBauCua'>
            <DiemCuoc />
            <div className='container row m-auto'>
                <div className='col-7'>
                    <DanhSachCuoc />
                </div>
                <div className='col-5'>
                    <DanhSachXucXac />
                </div>
            </div>
        </div>
    )
}
