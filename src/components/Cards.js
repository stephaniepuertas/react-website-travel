import React from 'react'
import Carditem from './Carditem'
import './Cards.css';

function Cards() {
    return (
    <div className='cards'> 
    <h1>Check Out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img-9.jpeg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem
                    src='images/img-2.jpeg'
                    text='Travel through the Island of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <Carditem
                    src='images/img-3.jpeg'
                    text='Set Sail in the Atlantic Ocean Visiting Uncharted Waters '
                    label='Mystery'
                    path='/services'
                    />
                    <Carditem
                    src='images/img-4.jpeg'
                    text='Experience Football on top of the Himiliyan Mountains'
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem
                    src='images/img-8.jpeg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards