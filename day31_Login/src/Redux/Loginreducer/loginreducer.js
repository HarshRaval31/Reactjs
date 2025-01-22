
    const value = {
        islogin : false,
        isloading : false,
        iserror : false,
        isusername : ""
    }

    const LoginReducer = (state = value,{type,payload})=>{

        switch (type) {
            case 'LOGIN_SUCCESS':
                return {...state,islogin : true,isloading : false,iserror : false,isusername : payload }
            case 'LOGIN_ERROR':
                return {...state,islogin : false,isloading : false,iserror : true,isusername : "" }
            case 'LOGIN_LOADING':
                return {...state,islogin : false,isloading : true,iserror : false,isusername : ""}
                    default :
                    return state
    }
}