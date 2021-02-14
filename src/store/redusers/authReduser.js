const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        
        case "LOGIN_ERROR":
            console.log("LOGIN error", )
            return {
                ...state,
                authError: 'login failed'
            }
        case "LOGIN_SUCCESS":
            console.log("LOGIN SUCCESS")
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("LOGOUT SUCCESS")
            return state

        case "SIGNUP_SUCCESS":
            console.log("signup success")
            return {
                ...state,
                authError: null
            }
        
        case "SIGNUP_ERROR": 
            console.log("SIGNUP_ERROR", action.err)
            return {
                ...state,
                authError: action.err.message
            }
        
        default:
            return state
    }
    return state
}

export default AuthReducer