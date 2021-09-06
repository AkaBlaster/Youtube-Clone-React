import React from 'react'
import './videoMetaData.scss'
import moment  from 'moment'
import numeral from 'numeral'
import YoutubeLogo from '../images/youtube-logo-png-2074.png'

import { MdThumbDown, MdThumbUp } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return(

        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                <span >
                    {numeral(10000).format('0.a')} Views
                    {moment('2021-05-5').fromNow()}

                </span>
                </div>
                <div>
                <span className="mr-3">
                    <MdThumbUp size={26}/>
                    {numeral(10000).format('0.a')}
                    </span>
                    <span className="mr-3">
                    <MdThumbDown size={26}/>
                    {numeral(10000).format('0.a')}
                    </span>
                </div>
                </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3 ">

            <div className="d-flex">
                 <img src={YoutubeLogo} alt="" 
                 className="rounder-circle mr-3"
                 
                 />
                 <div className='d-flex flex-column'>
                    <span>Nitin Sagar</span>
                    <span>{numeral(10000).format('0.a')} Subsribers </span>
                 </div>
            
            </div>

            <button className="btn border-0 p-2 m-2">Subscribe</button>

    
            </div>
            <div className="videoMetaData__description">
            <ShowMoreText
            lines={2}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="showMoreText"
            expanded={false}
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </ShowMoreText>
            </div>
        </div>
    ) 
}

export default VideoMetaData