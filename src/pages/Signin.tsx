import { useState } from 'react';
import logo from '../assets/leetcodelogo.png'
import { Link } from 'react-router-dom';
export default function Signin(){

    const [signindetails, setsignindetails]= useState({
        email: '',
        password:'',
    });


    function handleformchange(e){
        const {name, value} = e.target;
        setsignindetails({
            ...signindetails,
            [name]: value
        });

    }

function onformsubmit(e){
    e.preventDefault();
    console.log(signindetails);
}
    return(
      
        <div className='flex flex-col items-center  bg-blue-50 justify-center h-[100vh]'>
            <div className='h-40 w-40'>
                <img
                 className='w-full h-full rounded-md'
                 src={logo}>    
                 </img>
            </div>
            <div className="w-full">
                  <form onSubmit={onformsubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off"> 
                
                     <div className="my-5 w-1/3 text-black">
                    <input 
                    autoComplete="off"
                       type="email"
                       placeholder="Email..."
                       className="px-8 py-3 w-full bg-white"
                       name="email"
                       onChange={handleformchange}
                       value={signindetails.email}
                      
                     />
                     </div>
                     <div className="my-5 w-1/3 text-black">
                    <input 
                      autoComplete="off"
                       type="password"
                       placeholder="Password..."
                       className="px-8 py-3 w-full bg-white"
                       name="password"
                       onChange={handleformchange}
                       value={signindetails.password}
                       
                     />
                  </div>
                  <div className="my-5 w-1/3">
                  <button className="btn btn-success w-full hover:bg-green-400 rounded-md px-2 py-1" type="submit">Submit</button>
                  </div>
                   
                  </form>
                </div>
                <div className="mt-4">
                <p className="text-black">
                     Dont have an account ?
                <Link to={'/signup'}>
                     <button className="btn btn-warning rounded-md px-2 mx-5 hover:bg-green-400">
                        SignUp
                     </button>
                     </Link>
                    
                </p>
                </div>  
                </div>


    
    );
}