import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                autoComplete='off'
            />
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
            >

            </textarea>
            <div className='notes__image'>
                <img src="https://media.istockphoto.com/photos/panorama-360-degree-sphere-view-of-cityscape-picture-id971253714?k=6&m=971253714&s=170667a&w=0&h=QdoltzSivw8G63ODnomn0aK4y6_RXo9xTl28hPcPNGA=" alt="image" />

            </div>
        </div>

    </div>
  )
}
