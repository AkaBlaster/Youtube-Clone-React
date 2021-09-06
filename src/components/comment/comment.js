import React from 'react'
import YoutubeLogo from '../images/youtube-logo-png-2074.png'

const Comment = () => {
    return(
        <div>
                 <img src={YoutubeLogo} 
                 alt=""
                className='rounded-circle mr-3'
                />
                <div className="comment__body">
                    <p className="comment__header">
                        Nitin Sagar
                        {moment('2021-05-5').fromNow()}
                    </p>
                    <p>
                        NIce Video Dude!!!
                        
                    </p>
                </div>

        </div>
    )   
}

export default Comment