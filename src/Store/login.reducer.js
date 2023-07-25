const initialState={
    token:"",
    message:"",
    isLogin:false
};
const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Login_Done":
            return{
              ...state,
                token:action.payload.token,
                isLogin:true
            }
        case "Log_Out":
            return{
                ...state,
                token:"",
                isLogin:false,
                message:"Some Went Wrong"
            }    
        default: 
        return state;   
    }
}
export default loginReducer;
