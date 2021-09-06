
import firebase from 'firebase/compat/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOG_OUT } from '../reducers/action'


export const login = () => async dispatch =>{
    try{

        dispatch({
            type: LOGIN_REQUEST,
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
        const profile = {
            name:res.additionalUserInfo.profile.displayName,
            photoURL:res.additionalUserInfo.profile.photoURL,
        }
        sessionStorage.setItem('YTC-Access-Token', accessToken)
        sessionStorage.setItem('User',JSON.stringify(profile))

        dispatch({
            type:LOGIN_SUCESS,
            payload:accessToken,
        })

        dispatch({
            type:LOAD_PROFILE,
            payload: profile,
        })

    }catch (error){
        console.log(error.message);
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message,
        })
    }
}


export const log_out = () => async dispatch=>{
    await auth.signOut()
    dispatch({
        type:LOG_OUT,
    })

    sessionStorage.removeItem("YTC-Access-Token")
}
