import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://st3.depositphotos.com/1000580/18533/i/450/depositphotos_185332942-stock-photo-silhouette-of-man-and-sky.jpg)'
            }}
        
        ></div>
        <div className='journal__entry-body'>
            <p  className='journal__entry-title'>
                Un nuevo día
            </p>
            <p  className='journal__entry-content'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, nihil? Amet numquam odio nesciunt
            </p>
           
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
