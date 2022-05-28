import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import googleLogo from '../../Images/google.png';
import useToken from '../../hooks/useToken';
import usePageTitle from '../../hooks/usePageTitle';


const SignUp = () => {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({})
    const [handleError, setError] = useState('');
    const { password, confirmpassword } = userInfo;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser);



    let userSignUpError;

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [user, gUser, navigate, token]);


    if (error || gError || uError) {
        userSignUpError = error?.message || gError?.message || uError?.message;

    }


    if (loading || gLoading || updating) {
        return <Spinner />
    }

    const onSubmit = async data => {
        setUserInfo(data)
        if (password !== confirmpassword) {
            setError("Password and Confirm Password don't matched!")
        }
        if (data.password === data.confirmpassword) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            toast.success('Create a new user')
        }
        reset();

    }

    return (
        <div className='flex items-center justify-center lg:h-[120vh] md:h-[80vh] h-screen '
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200"
        >
            {
                usePageTitle('SignUp')
            }
            <div className="card  md:w-96 w-10/12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-semibold ">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text-alt text-lg  mt-[-15px] font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>


                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email!"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>


                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    pattern: {
                                        value: /[0-9a-zA-Z]{6,}/,
                                        message: 'Password should 6 characters or longer!!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Confirm Password</span>
                            </label>


                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmpassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm password is required"
                                    },
                                    pattern: {
                                        value: /[0-9a-zA-Z]{6,}/,
                                        message: 'Confirm Password should 6 characters or longer!!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                                {errors.confirmpassword?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.confirmpassword.message}</span>}
                            </label>
                        </div>
                        <input className='btn text-white w-full' value="Sign Up" type="submit" />
                    </form>
                    <p className='text-center text-sm bg-pink-200 text-red-500 rounded-lg'>{handleError && handleError}</p>
                    <p className='text-center bg-pink-200 text-red-500 rounded-lg'>{userSignUpError && userSignUpError}</p>
                    <p className="text-sm">Already have an account? <span className='text-primary'><Link to="/login"> Login</Link></span></p>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'> <img className='mr-2' src={googleLogo} alt="google_logo" /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;