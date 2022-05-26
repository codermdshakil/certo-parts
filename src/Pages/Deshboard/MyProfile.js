import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelope, faHome, faLink, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const MyProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

    const { data: updatedUser, isLoading, refetch } = useQuery('myinformation', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/userInfo/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem('accessToken')
                signOut(auth);
               return navigate('/');
            }
            return res.json()
        })
    );

    if (isLoading) {
        return <Spinner />
    }

    const onSubmit = async data => {
        const userName = data.name;
        const userEmail = data.email;
        const userPhone = data.phone;
        const userEducation = data.education;
        const userAddress = data.address;
        const userLocation = data.location
        const userLinkedinUrl = data.linkedin
        const userInformation = { userName, userEmail, userPhone, userEducation, userAddress, userLocation, userLinkedinUrl };

        const url = `https://secret-reaches-23415.herokuapp.com/userInfo/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount > 0 || data.modifiedCount > 0) {
                    toast.success('Update successfully!')
                }
                refetch()
                reset();
            })

    }

    return (
        <div>
            <div className=' bg-slate-200 lg:p-16 md:py-10 py-16 md:px-5 rounded-xl grid gap-x-10 md:grid-cols-2 grid-cols-1 mt-5 mb-10 '>
                <div className='md:w-full w-11/12 mx-auto p-6 md:mb-0 mb-10 rounded-xl custom_shadow  bg-white'>
                    <h1 className='text-2xl font-bold my-3'>My Profile</h1>
                    <div className="my-info">
                        <h3 className='text-xxl font-semibold text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faUser} /> Full Name</h3>
                        {updatedUser ? <h4>{updatedUser?.userName}</h4> : <h4>{displayName}</h4>}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faEnvelope} /> Email Address</h3>
                        {updatedUser ? <h4>{updatedUser?.userEmail}</h4> : <h4>{email}</h4>}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faPhone} /> Phone</h3>
                        {updatedUser ? <h4>{updatedUser?.userPhone}</h4> : 'Please Update!'}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faBookOpen} /> Education</h3>
                        {updatedUser ? <h4>{updatedUser?.userEducation}</h4> : 'Please Update!'}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faLocationDot} />  Address</h3>
                        {updatedUser ? <h4>{updatedUser?.userAddress}</h4> : 'please Update!'}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={faHome} /> Location</h3>
                        {updatedUser ? <h4>{updatedUser?.userLocation}</h4> : 'Please Update!'}
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'> <FontAwesomeIcon className='mr-1 text-primary' icon={ faLink } /> Linkedin Profile Url</h3>
                        {updatedUser ? <h4>{updatedUser?.userLinkedinUrl}</h4> : 'Please Update!'}
                    </div>
                </div>
                <div className='p-6 md:w-full w-11/12  rounded-xl mx-auto custom_shadow bg-white'>
                    <h1 className='text-2xl font-bold my-3'>Update Profile </h1>
                    <div className='update-info '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text-alt text-lg  mt-[-15px]">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={displayName}
                                    readOnly
                                    className="input input-bordered w-full  "
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
                                    <span className="label-text-alt text-lg mt-[-15px]">Email <span className='text-sm text-gray-500'>(Email Address cannot be changed)</span></span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    readOnly
                                    className="input input-bordered w-full  "
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
                                    <span className="label-text-alt text-lg mt-[-15px]">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    className="input input-bordered w-full  "
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                                <label className="label">
                                    <span className="label-text-alt text-lg mt-[-15px]">Education <span className='text-sm text-gray-600'>(Your Education level)</span></span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Education"
                                    className="input input-bordered w-full  "
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: "Education is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                </label>

                                <label className="label">
                                    <span className="label-text-alt text-lg mt-[-15px]">Linkedin Profile <span className='text-sm text-gray-600'>URL</span></span>
                                </label>
                                <input
                                    type="url"
                                    placeholder="Linkedin profile url"
                                    className="input input-bordered w-full  "
                                    {...register("linkedin", {
                                        required: {
                                            value: true,
                                            message: "Linkedin profile url is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
                                </label>



                                <label className="label">
                                    <span className="label-text-alt text-lg mt-[-15px]">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full  "
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "Address is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>


                                <label className="label">
                                    <span className="label-text-alt text-lg mt-[-15px]">Location <span className='text-sm text-gray-600'>(City/District)</span></span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered w-full  "
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: "Location is required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                </label>



                            </div>
                            <button className='btn w-full text-white'>Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;