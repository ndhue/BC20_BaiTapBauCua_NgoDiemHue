import React, { Component } from 'react'
import './BaiTapBookingTicket.css';
import ThongTinGhe from './ThongTinGhe';
import danhSachGheData from './assets/danhSachGhe.json';
import HangGhe from './HangGhe';
export default class BaiTapDatVeXemPhim extends Component {
    renderHangGhe = () =>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <div key={index} >
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
        })
    }
    render() {
        return (
            <div className="bookingMovie"style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(./img/bgMovie.jpg)',backgroundSize:'100%'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',width:'100%',height:'100%'}}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <div style={{fontSize:45}}className='text-warning text-center'>ĐẶT VÉ XEM PHIM CYBERLEARN</div>
                                <div className="text-light  text-center mt-1" style={{fontSize:'25px'}}>Màn hình</div>
                                <div className="mt-1" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                    <div className='screen'></div>
                                </div>  
                                {this.renderHangGhe()}     
                            </div>
                            <div className='col-4'>
                                <div style={{fontSize:'35px'}}className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}