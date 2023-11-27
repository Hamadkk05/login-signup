import React, { useState } from "react";
import ReactDOM from "react-dom";
import Signup from "./pages/signup/signup.js";
import Login from "./pages/login/login";

const Main=()=>{
	let [screen,setScreen]=useState(0)
	return(
	 <div>
	  {screen===1?
	 <Signup  setScreen={setScreen} />
	 :
	 <Login setScreen={setScreen}/>
	  }
	 </div>
	)
  }

ReactDOM.render(
	<>
	
 
	<Main/>
	
	  </>
	
	,
document.getElementById('root'))

