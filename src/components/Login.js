
import Header from "./Header";
import bg from "../assets/bg.jpg"
import { useState } from "react";
const Login =()=>{


     const [isSignIn, setisSignIn]= useState(true)
const toggleSignInForm=()=>{
setisSignIn(!isSignIn)

}


return (
    <div>
        <Header/>


<div className="absolute">
<img 
src={bg}
alt = "bg-img"
/>
</div>

<form className=" absolute p-12 w-3/12 bg-black text-white mx-auto right-0 left-0 my-36 rounded-lg bg-opacity-80">
{/* <h1>Enter your info to sign in</h1> */}
<h1> {isSignIn? "Sign In": "Sign Up"}</h1>

{ !isSignIn &&<input
type="text"
placeholder="Enter Your Name"
className="w-full p-2 my-4 bg-gray-700"
/>}

   <input type= "text"
    placeholder="Email address "
    className= "p-2 my-4 w-full bg-gray-700"
    /> 
   <input type= "password" 
   placeholder="password " 
   className="p-2 my-4 w-full bg-gray-700"
   /> 
   <button
    className="p-4 my-4  bg-red-600   hover:bg-red-700 w-full font-bold rounded ">
      {isSignIn? "Sign In": "Sign Up"}
     </button >
     <p className="cursor-pointer" onClick={toggleSignInForm}>{ isSignIn? "New on netflix? Sign Up Now": "Already A Member?"}</p>

</form>



    </div>
)
}
export default Login;
