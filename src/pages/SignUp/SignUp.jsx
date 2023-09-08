import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loader from "../../loader/Loader";

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user, createUser, profileUpdate, loading, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            navigate('/todos');
        }
    }, [user, navigate])

    const handleSignUp = (data) => {
        //image upload to imagebb server
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const imgUrl = result.data.url;
                if (imgUrl) {
                    //create a new user
                    createUser(data.email, data.password)
                        .then(result => {
                            profileUpdate(data.name, imgUrl)
                                .then(result => {
                                    const currentUser = {
                                        name: data.name,
                                        email: data.email,
                                        image: imgUrl
                                    }
                                    // saveUserDB(currentUser);
                                    navigate('/todos')
                                })
                        })
                        .catch(e => console.log(e))
                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => { })
            .catch(e => console.log(e))
    }

    if (loading) {
        return <Loader />
    }
    return (
        <div className="mt-10 flex flex-col items-center justify-center">
            <div>
                <div>
                    <h1 className="text-center text-4xl p-2 font-bold">SignUp</h1>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-md mt-4">
                    <form onSubmit={handleSubmit(handleSignUp)} className="p-10">
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Full Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="name" className="p-2 border-2 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="p-2 border-2 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Image</span>
                            </label>
                            <input {...register("image", { required: true })} type="file" placeholder="email" className="p-2 border-2 rounded-lg focus:outline-none" />
                        </div>
                        <div className="flex flex-col pt-3">
                            <label className="pb-2">
                                <span className="font-medium">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="text" placeholder="password" className="p-2 border-2 rounded-lg focus:outline-none" />
                        </div>
                        <div className="mt-3">
                            <input type='submit' value='Login' className="p-2 text-white bg-green-600 w-full rounded-xl cursor-pointer" />
                        </div>
                        <p>Already have an account? <Link className='text-emerald-600' to='/'>Please Login</Link></p>

                        <div className="mt-3">
                            <button onClick={handleGoogleSignIn} className="p-2 text-white bg-green-600 w-full rounded-xl ">Signin with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;