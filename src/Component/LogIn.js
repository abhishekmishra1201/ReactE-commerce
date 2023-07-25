import React,{useState} from "react";
import { login } from "../Store/authSlice";
import { useDispatch, useSelector } from "react-redux";
const LogIn = () => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const state=useSelector((state)=>state.login);
    const dispatch=useDispatch();
    const submitHndler = (e) => {
      e.preventDefault();
      dispatch(login({ username, password }));
    };
    return(
     
      <form className="container" onSubmit={submitHndler}>
         <h3 className="p">Login FORM</h3>
        {state.isLogin ? <p className="p">Login Success</p> : <p className="p">{state.message}</p>}
        <div>
          
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
  )
}

export default LogIn