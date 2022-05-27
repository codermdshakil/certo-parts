import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [productLoading, setProductLoading] = useState(false)

    const imgStoreKey = '1102b1b472176018cfdab59d9d885956';

    if (productLoading) {
        return <Spinner />
    }

    const onSubmit = async data => {
        setProductLoading(true);
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
                const img = resultImg;
                const des = data.des;
                const price = parseFloat(data.price);
                const minQuantity = parseFloat(data.minQuantity);
                const availableQuantity = parseFloat(data.availableQuantity);
                const product = { name, img, des, price, minQuantity, availableQuantity };
                fetch('https://secret-reaches-23415.herokuapp.com/parts', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        setProductLoading(false)
                        toast.success(` Successfully ${name} Product added `);
                        reset()
                    })

            })


    }

    return (
        <div className=' bg-slate-200 rounded-xl p-10'>
            <div className="card mx-auto lg:w-5/12 md:w-6/12 w-11/12 my-10  bg-base-100 shadow-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
                <div className="card-body">
                    <h2 className=" text-green-500 text-2xl font-bold text-center py-4">Product Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text-alt text-lg  mt-[-15px] font-medium">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full   "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
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
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full  "
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>


                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Minimum Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full  "
                                {...register("minQuantity", {
                                    required: {
                                        value: true,
                                        message: "Minimum Quantity"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text-alt text-lg mt-[-15px] font-medium">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full  "
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: "Available Quantity"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
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
                        <button className='btn w-full text-white'>Add Product <FontAwesomeIcon className='ml-2' icon={faPaperPlane} /> </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;