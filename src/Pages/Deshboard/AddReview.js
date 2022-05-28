import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import usePageTitle from '../../hooks/usePageTitle';

const AddReview = () => {

    const [user] = useAuthState(auth);
    const [reviewLoading, setReviewLoading] = useState(false);
    const { displayName } = user;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStoreKey = '1102b1b472176018cfdab59d9d885956';

    if (reviewLoading) {
        return <Spinner />
    }

    const onSubmit = async data => {
        setReviewLoading(true)
        const imges = data.photo[0];
        const formData = new FormData();
        formData.append('image', imges);
        const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const resultImg = result?.data?.url;
                const name = data.name;
                const address = data.address;
                const img = resultImg;
                const star = parseFloat(data.rating);
                const title = data.title;
                const des = data.des;

                const newReview = { name, address, img, star, title, des };

                fetch('https://secret-reaches-23415.herokuapp.com/reviews', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newReview)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            setReviewLoading(false)
                            toast.success(`${displayName} Added a Review `);
                            reset()
                        }
                    })
            })
    }

    return (
        <div className='bg-slate-200 rounded-xl md:p-10 p-2'>
            {
                usePageTitle('Add Review')
            }
            <div className="card mx-auto lg:w-5/12 md:w-6/12 w-11/12 my-10  bg-base-100 shadow-xl"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
            >
                <div className="card-body">
                    <h2 className=" text-green-500 text-2xl font-bold text-center py-4">Review Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text-alt text-lg  mt-[-15px] font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={displayName}
                                readOnly
                                className="input input-bordered w-full   "
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
                                <span className="label-text-alt text-lg  mt-[-15px] font-medium">Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Photo"
                                className="input input-bordered w-full   "
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: "Photo is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}
                            </label>


                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Address</span>
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
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Rating"
                                className="input input-bordered w-full  "
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: "Rating is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full  "
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Title is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Description</span>
                            </label>


                            <textarea
                                className="textarea textarea-bordered"
                                placeholder='Description here..'
                                {...register("des", {
                                    required: {
                                        value: true,
                                        message: "Description is required"
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.des?.type === 'required' && <span className="label-text-alt text-red-500">{errors.des.message}</span>}
                            </label>
                        </div>
                        <button type='submit' className='w-full btn text-white '>Add Review <FontAwesomeIcon className='ml-2' icon={faPaperPlane} /> </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;