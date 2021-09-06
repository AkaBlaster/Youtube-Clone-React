import React, { useEffect } from 'react';
import './homescreen.scss'
import {Col, Container} from "react-bootstrap";
import Categories from "../categoriesBar/categories";
import Video from "../video/video";
import {useDispatch, useSelector} from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import InfiniteScroll from 'react-infinite-scroll-component';



const Homescreen = () =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPopularVideos())
    }, [dispatch])


    const {videos, activeCategory} = useSelector(state=>state.homeVideos)

    const fetchData= ()=>{
        if(activeCategory === "ALL")
        dispatch(getPopularVideos())
        else{
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return(

      <Container>
          <Categories/>
            <InfiniteScroll
            className="row"
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
                <div className="spinner text-danger d-block mx-auto"></div>
            }
            
            >
              {videos.map((video) => (
                    <Col lg={3} md={4}>
                        <Video video={video} key={video.id}/>
                    </Col>
                    ))}
                    </InfiniteScroll>
      </Container>
    )
}
export default Homescreen