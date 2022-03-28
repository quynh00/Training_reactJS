import { LOG_IN, LOG_OUT, SWITCH_THEME, GET_USER_NAME, CHANGE_LANGUAGE } from "./types";
const initialSate = {
    Login: {
        isLogin: false,
        username:'',
    },
    Theme: {
        checkTheme: 'dark'
    },
    Language:{
        langis:'vi'
    }

}

const Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        
        case GET_USER_NAME:{
            return{
                ...state,   
                Login: {
                    ...state.Login,
                    username:action.payload
                }
            }
        }

        case LOG_OUT:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }

        case SWITCH_THEME:
            return {
                ...state,
                Theme: {
                    ...state.Theme,
                    checkTheme: action.payload
                }
            }
            
        case CHANGE_LANGUAGE:
            return{
                ...state,
                Language: {
                    ...state.Language,
                    langis: action.payload
                }
            }
        default:
            return state;
    }
}

export default Reducer;
