import React from 'react'
import './WatchScreen.scss'
import {Col, Row} from 'react-bootstrap'
import VideoMetaData from '../videoMetaData/videoMetaData'
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'
import Comments from '../comments/comments'

const WatchScreen = () => {
    return(
        <Row>
            <Col Lg={8}>  <div className="watchScreen__player">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"
             title="My Video"
             allowFullScreen
             width="100%"
             height="100%">
           
            </iframe>

        </div>
        <VideoMetaData/>
        <Comments/>
        </Col>
            <Col Lg={4}>

            {
                [...Array(10)].map(()=><VideoHorizontal/>)
            }    
                
             </Col>

       

        

        </Row>
    )
}

export default WatchScreen