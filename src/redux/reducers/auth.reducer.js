import { LOGIN_REQUEST, LOGIN_SUCESS, LOGIN_FAIL, LOAD_PROFILE, LOG_OUT} from '../reducers/action'

const initialState = {
    accessToken : 
    sessionStorage.getItem("YTC-Access-Token")
    ? sessionStorage.getItem("YTC-Access-Token")
    :null,
    user: null,
    loading: false
}   


export const authReducer = (prevState = {}, action ) => {
     const {type, payload} = action

     switch(type){
         case LOGIN_REQUEST: return{
             ...prevState,
             loading: true,

         }
         case LOGIN_SUCESS: return{
             ...prevState,
             accessToken:payload,
             loading: false,    
         }
         case LOGIN_FAIL: return{
            ...prevState,
            accessToken:null,
            loading: false,    
            error: payload,
        }
        case LOAD_PROFILE:
            return{
                ...prevState,
                user: payload,

            }

            case LOG_OUT:return{
                ...prevState,
                accessToken:null,
                user: null,
            }
         default:
             return prevState
     }
}