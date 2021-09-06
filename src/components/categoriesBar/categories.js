import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import './categoriesBar.scss';

const keyword = [
    'ALL',
    'React js',
    'Node js',
    'Angular js',
    'Redux',
    'Music',
    'Coding',
    'Coding Interviews',
    'Football',
    'Code',
    'HTML',
    'CSS',
    'MERN STACK',
    'MEAN STACK',
    'JAVASCRIPT',
]



const Categories = () => {

    const [activeElement, setActiveElement] = useState('ALL')


    const dispatch = useDispatch()
    const handleClick = (value) => {
        setActiveElement(value)
        if(value==='ALL'){
            dispatch(getPopularVideos())

        }
        else{
            dispatch(getVideosByCategory(value))
        }
    }

    return <div className="CategoriesBar">
        {
            keyword.map(((value, i) => <span
                key={i}
                onClick={()=> handleClick(value)}
                className={activeElement === value? 'active' : ''}
            >
            {value}
            </span>))
        }
    </div>
}

export default Categories