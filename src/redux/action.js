import { LOG_IN,LOG_OUT,SWITCH_THEME,CHANGE_LANGUAGE, GET_USER_NAME } from './types'

export const Logins = (data,) => {
    return{
        type: LOG_IN,
        payload:data
    }
}

export const Logouts = (data) => {
    return{
        type: LOG_OUT,
        payload: data
    }
}

export const SwitchTheme = (text) => {
    return{
        type:SWITCH_THEME,
        payload: text
    }
}

export const ChangeLanguage = (text) => {
    return{
        type:CHANGE_LANGUAGE,
        payload: text
    }
}

export const GetUserName = (data) => {
    return{
        type:GET_USER_NAME,
        payload:data
    }
}