import React from 'react'
import './comments.scss'
import YoutubeLogo from '../images/youtube-logo-png-2074.png'
import { Comment } from '@babel/types'

const Comments = () =>{

    return (
        <div className="comments">
            <p>1234 comments</p>
            <div className="comment__form d-flex w-100 my-2">
                <img src={YoutubeLogo} alt=""
                className='rounded-circle mr-3'
                
                />

            <form onSubmit='' className="d-flex flex-grow-1">
                <input
                 type="text"
                 className="flex-grow-1"
                 placeholder='Write a comment' 
                />
                <button className="border-0 p-2">Comments</button>
            </form>

            </div>
            <div className="comments__list">
                {
                    [...Array(15)].map(()=>{
                        <Comment/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Comments