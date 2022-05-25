import React  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';



const MyProfile = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const { displayName, email } = user;

    const onSubmit = async data => {
        const userName = data.name;
        const userEmail = data.email;
        const userPhone = data.phone;
        const userEducation = data.education;
        const userAddress = data.address;
        const userLocation = data.location
        const userLinkedinUrl = data.linkedin

        const userInformation = { userName, userEmail, userPhone, userEducation, userAddress, userLocation, userLinkedinUrl };
        console.log(userInformation, 'user info');


        const url = `http://localhost:5000/userInfo/${email}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div>
            <div className='flex'>
                <div className='w-5/6 border-2 p-3 border-red-600'>
                    <h1 className='text-2xl font-bold my-3'>My Profile</h1>
                    <div className="my-info">
                        <h3 className='text-xxl font-semibold text-gray-600'>Full Name</h3>
                        <h4>{displayName}</h4>
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'>Email Address</h3>
                        <h4>{email}</h4>
                        <h3 className='text-xxl font-semibold mt-3 text-gray-600'>Phone</h3>
                        <h4>{email}</h4>
                    </div>
                </div>
                <div className='w-4/6 p-3 mx-10 border-2 border-green-600 '>
                    <h1 className='text-2xl font-bold my-3'>Update Profile </h1>
                    <div className='update-info '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text-alt text-lg  mt-[-15px]">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
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
                                    <span className="label-text-alt text-lg mt-[-15px]">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
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