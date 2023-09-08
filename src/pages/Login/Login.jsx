import { useForm } from "react-hook-form";
import Loader from "../../loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, login, loading, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            navigate('/todos');
        }
    }, [user, navigate])

    const handleLogin = (data) => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                navigate('/todos');
            })
    }
    //google signup
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate('/todos');
            })
            .catch(e => console.log(e))
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div className="mt-10 flex flex-col items-center justify-center">
            <div>
                <div>
                    <h1 className="text-center text-4xl p-2 font-bold">Login now!</h1>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-md mt-4">
                    <form onSubmit={handleSubmit(handleLogin)} className="p-10">
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="p-2 border-2 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="text" placeholder="password" className="p-2 border-2 rounded-lg focus:outline-none" />
                            <label className="pt-2">
                                <a href="#" className="text-xs">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mt-3">
                            <input type='submit' value='Login' className="p-2 text-white bg-green-600 w-full rounded-xl cursor-pointer" />
                        </div>
                        <p>Are you new user? <Link className='text-emerald-600' to='/signup'>Please Signup</Link></p>

                        <div className="mt-3">
                            <button onClick={handleGoogleSignIn} className="p-2 text-white bg-green-600 w-full rounded-xl ">Signin with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;