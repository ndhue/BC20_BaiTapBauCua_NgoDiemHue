import React, { Component } from 'react'
import { connect } from 'react-redux'
import {huyGheAction} from '../redux/BaiTapDatVeXemPhim/action/DatVeAction';
class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span className="text-light" style={{fontSize:'28px'}}>Ghế đã đặt</span>
                    <br></br>
                    <button className='gheDangChon'></button> <span className="text-light" style={{fontSize:'28px'}}>Ghế đang đặt</span>
                    <br></br>
                    <button style={{marginLeft:0}}className='ghe'></button> <span className="text-light" style={{fontSize:'28px'}}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                <table className="table" border="3">
                    <thead>
                        <tr className="text-light" style={{fontSize:35}}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button className="text-danger btn btn-light" onClick={()=>{
                                    this.props.dispatch( huyGheAction(gheDangDat.soGhe))
                                }}>X</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Tổng tiền</td>
                            <td className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                return tongTien+=gheDangDat.gia;
                            },0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        danhSachGheDangDat: state.DatVeXemPhim.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinGhe)
