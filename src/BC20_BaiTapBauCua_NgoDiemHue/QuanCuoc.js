import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { set } from 'lodash';
export default function QuanCuoc(props) {
    const dispatch = useDispatch();
    const { quanCuoc } = props;
    const [propsUseSpringInCrease, setInCrease, stopIncrease] = useSpring(() => {
        return {
            from: { scale: 0.75 },
            to: { scale: 1.25 },
            reset: true,
        }
    });

    const [propsUseSpringDeCrease, setDeCrease, stopDeCrease] = useSpring(() => {
        return {
            from: { scale: 0.75 },
            to: { scale: 1.25 },
            reset: true,
        }
    });
    return (
        <div className='mt-3'>
            <img src={quanCuoc.hinhAnh} alt='bau' style={{ width: '100%' }}></img>
            <div className='bg-success mt-1 text-center rounded'>
                <animated.button style={{ transform: propsUseSpringInCrease.scale.to(scale => `scale(${scale})`)}} onClick={() => {
                    
                    setInCrease({ scale: 1 })
                    setInCrease({ scale: 1.25 })
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: true
                    })
                }} className='btn btn-danger m-2'>
                    <i className="fa fa-plus"></i>
                </animated.button>
                <span style={{ color: 'yellow', fontSize: '20px' }}>{quanCuoc.diemCuoc}</span>
                <animated.button style={{ transform: propsUseSpringDeCrease.scale.to(scale => `scale(${scale})`) }} onClick={() => {
                    
                    setDeCrease({ scale: 1 })
                    setDeCrease({ scale: 1.25 })
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: false
                    })
                }} className='btn btn-danger m-2'>-</animated.button>
            </div>
        </div>
    )
}
