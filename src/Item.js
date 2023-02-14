import React from 'react';
import data from './data'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'

export default function Item(){
    return (
        <section>
            <h1 className='main-heading'>Your Cart</h1>
            <div className='item-con'>
                <div className='image-con'>
                    <img src='https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png' alt='phone' className='image'/>
                </div>
                <div className='item-detail-con'>
                    <p className='item-name'>Samsung Galaxy S8</p>
                    <p className='item-price'>$399.99</p>
                    <button type='button' className='remove-btn'>remove</button>
                </div>
                <div className='select-con'>
                    <IoIosArrowUp className='arrowup'/>
                    <span className='item-number'>1</span>
                    <IoIosArrowDown className='arrowdown'/>
                </div>
            </div>
        </section>
    )
}