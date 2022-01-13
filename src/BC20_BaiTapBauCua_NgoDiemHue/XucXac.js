import React from 'react'

export default function XucXac(props) {
    const {xucXac} = props;
    return (
        <>
            <div className='scene'>
                <div className='cube'>
                    <img className='cube__face front' src={xucXac.hinhAnh} alt='xucXac'></img>
                    <img className='cube__face back' src={xucXac.hinhAnh} alt='xucXac'></img>
                    <img className='cube__face right' src={xucXac.hinhAnh} alt='xucXac'></img>
                    <img className='cube__face left' src={xucXac.hinhAnh} alt='xucXac'></img>
                    <img className='cube__face top' src={xucXac.hinhAnh} alt='xucXac'></img>
                    <img className='cube__face bottom' src={xucXac.hinhAnh} alt='xucXac'></img>
                </div>
            </div>
        </>
    )
}
