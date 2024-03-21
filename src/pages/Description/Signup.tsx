
import { useState } from 'react';
import logo from '../../assets/leetcodelogo.png'
import { Link } from 'react-router-dom';
export default function Signup(){

  const [signupdetails, setsignupdetails]= useState({
    email: '',
    password:'',
    username: '',
});


function handleformchange(e){
    const {name, value} = e.target;
    setsignupdetails({
        ...signupdetails,
        [name]: value
    });

}

function onformsubmit(e){
e.preventDefault();
console.log(signupdetails);
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
                  <form onSubmit={onformsubmit}   className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off"> 
                  <div className="my-5 w-1/3 text-black">
                    <input 
                    autoComplete="off"
                       type="text"
                       placeholder="Username..."
                       className="px-8 py-3 w-full bg-white"
                       name="username"
                       value={signupdetails.username}
                       onChange={handleformchange}
                      
                     />
                     </div>
                     <div className="my-5 w-1/3 text-black">
                    <input 
                    autoComplete="off"
                       type="email"
                       placeholder="Email..."
                       className="px-8 py-3 w-full bg-white"
                       name="email"
                       value={signupdetails.email}
                       onChange={handleformchange}
                       
                      
                     />
                     </div>
                     <div className="my-5 w-1/3 text-black">
                    <input 
                      autoComplete="off"
                       type="password"
                       placeholder="Password..."
                       className="px-8 py-3 w-full bg-white"
                       name="password"
                       value={signupdetails.password}
                       onChange={handleformchange}
                       
                     />
                  </div>
                  <div className="my-5 w-1/3">
                  <button className="btn btn-success w-full hover:bg-green-400 rounded-md px-2 py-1" type="submit">Submit</button>
                  </div>
                   
                  </form>
                </div>
                <div className="mt-4">
                <p className="text-black">
                     Already have an account ?
                  <Link to={'/signin'}>
                     <button className="btn btn-warning rounded-md px-2 mx-5 hover:bg-green-400">
                        SignIn
                     </button>
                     </Link>
                    
                </p>
                </div>  
                </div>


    
    );
}