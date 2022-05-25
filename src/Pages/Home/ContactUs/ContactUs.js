import React from 'react';
import './ContactUs.css';


const ContactUs = () => {


    const handleContact = e => {
        e.preventDefault();
        e.target.reset();
    }


    return (
        <div>
            <div className='mt-20 mb-24' id='contact'>
                <div className='mt-10 mb-[-70px]'>
                    <h2 className='text-3xl font-bold text-center '>Contact  <span className='text-secondary'> Us</span></h2>
                    <h5 className='text-primary text-center'>Don't hesilate to Contact Us</h5>
                </div>
                <div className='w-full contact_wrapper'>
                    <div className=' flex items-center justify-center lg:h-screen   md:h-[60vh] h-[70vh]'>
                        <form onSubmit={handleContact}>
                            <div className="mt-16 mx-auto border-2 p-5 rounded-xl border-green-500 lg:w-5/12 md:w-5/12 w-5/6  bg-base-100 shadow-xl">
                                <h2 className='text-primary text-2xl text-center text-semibold mb-3'>Your Information </h2>
                                <input type="text" className='p-3 input input-bordered w-full mb-3' name="name" placeholder='Name' required />
                                <input type="email" className='p-3 input input-bordered w-full mb-3' name="email" placeholder='Email' required />
                                <input type="number" className='p-3 input input-bordered w-full mb-3' name="number" placeholder='Number' required />
                                <input type="text" className='p-3 mb-4 input input-bordered w-full ' name="address" placeholder='Address' required />
                                <button className='btn btn-primary w-full text-white'>Contact Us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;