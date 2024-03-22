import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import {NavLink, useNavigate} from "react-router-dom";

interface IFormInput {
    email: string,
    password: string
}

export default function SignIn() {
    const [isVisible, setIsVisible] = useState(false);
    const {register, handleSubmit, reset} = useForm<IFormInput>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const navigate = useNavigate();

    const printData: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        reset();
        navigate("/");
    }

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto bg-white"
                        src="https://static.wixstatic.com/media/62c655_3b9511a2886745efa46d0bb95f173d77~mv2.png/v1/fill/w_246,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Algo%20Camp%20Logo_edited.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-content">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(printData)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-content">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-neutral-content
                                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                    focus:ring-inset focus:ring-success sm:text-sm sm:leading-6"
                                    placeholder="email address"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    })}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-neutral-content">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-neutral-content hover:text-success">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2 flex justify-end items-center">
                                <input
                                    id="password"
                                    type={isVisible ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-neutral-content shadow-sm
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    focus:ring-success sm:text-sm sm:leading-6"
                                    placeholder="password"
                                    {...register("password", {required: true, minLength: 8})}

                                />
                                <span className="absolute mx-1.5" onClick={toggleVisibility}>
                                    {isVisible ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12
                                                  4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49
                                                  16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5
                                                  12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1
                                                  12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293
                                                  5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21
                                                  21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88
                                                  9.88"/>
                                        </svg>
                                    }
                                </span>
                            </div>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <input type="checkbox"
                                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="comments" className="font-medium text-neutral-content">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-success px-3 py-1.5 text-sm
                                font-semibold leading-6 text-neutral-contentshadow-sm hover:bg-success/50
                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-success"
                            >
                                Sign in
                            </button>
                        </div>
                        <p className="mt-2 text-center text-sm text-neutral-content">
                            By signing in you accept the {" "}
                            <a href="#" className="font-semibold leading-6 text-success hover:text-success/50">
                                Terms of Use and acknowledge the Privacy Statement and Cookie Policy.
                            </a>
                        </p>
                    </form>
                    <p className="mt-10 text-center text-sm neutral-content">
                        Don't have an account yet? {" "}
                        <NavLink to="/signup" className="font-semibold leading-6 text-success hover:text-success/50">
                            Register now
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}
