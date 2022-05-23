import React from 'react';
import './ContactUs.css';


const ContactUs = () => {


    const handleContact = e => {
        e.preventDefault();
        e.target.reset();
    }


    return (
        <div>
            <div id='contact'>
                <div className='mt-10 mb-[-70px]'>
                    <h2 className='text-3xl font-bold text-center '>Contact  <span className='text-primary'> Us</span></h2>
                    <h5 className='text-secondary text-center'>Don't hesilate to Contact Us</h5>
                </div>
                <div className='w-full contact_wrapper'>
                    <div className='md:px-20  flex items-center justify-center h-screen'>
                        <form onSubmit={handleContact}>
                            <div className="card mt-10 mx-auto border-2 border-green-500 w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className='text-secondary text-2xl text-center text-semibold mb-3'>Your Information </h2>
                                    <input type="text" className='p-3 input input-bordered'  name="name" placeholder='Name'   required/>
                                    <input type="email"  className='p-3 input input-bordered' name="email" placeholder='Email'  required/>
                                    <input type="number"  className='p-3 input input-bordered' name="number" placeholder='Number'  required/>
                                    <input type="text"  className='p-3 mb-4 input input-bordered' name="address" placeholder='Address' required />
                                    <button className='btn btn-secondary text-white'>Contact Us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;