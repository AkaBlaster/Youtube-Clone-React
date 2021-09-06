import React, { useEffect } from 'react';
import './LoginScreen.scss'
import YoutubeImg from '../images/youtube-logo-png-2074.png'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/auth.action";
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {

    const accessToken = useSelector(state=>state.auth.accessToken)


    const dispatch = useDispatch()
    const handleLogin = () =>{
    dispatch(login())
    }

    const history = useHistory()
    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    })

    return (
        <div className="login">
            <div className="login__container">
                <img src={YoutubeImg} alt=""/>
                <button onClick={handleLogin}>
                    Login with Google
                </button>
                <p>This project is made using Youtube Data Api</p>
            </div>
        </div>
    )
}

export default LoginScreen