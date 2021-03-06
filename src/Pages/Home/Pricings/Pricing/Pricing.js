import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStore, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pricing = ({ p }) => {

    const { name, service1, service2, service3, service4, service5, price } = p;
    return (
        <article className={` ${name === 'Advanced' ? 'uniqe' : ''} border-2 border-white hover:border-2 hover:border-green-500  md:w-full w-5/6 mx-auto p-5 relative rounded-lg bg-white pricing_box`}
            data-aos="fade-up"
            data-aos-duration="2500"
        >
            <div>
                <div >
                    <div className="flex justify-center my-4">
                        <div>
                            <h3 className='text-3xl font-semibold mb-2'>{name}</h3>
                        </div>
                        <div>
                            {name === 'Premium' ? <FontAwesomeIcon className='store_icon_style text-4xl' icon={faStore}></FontAwesomeIcon> : ''}
                        </div>
                    </div>
                    <h3 className='text-2xl mb-4 text-center '>$ {price} <span className='text-lg text-slate-500'>/m</span></h3>
                </div>
                <div>
                    <p className='mb-1'> <FontAwesomeIcon className='check_icon_style' icon={faCheck}></FontAwesomeIcon> {service1}</p>
                    <p className='mb-1'> <FontAwesomeIcon className='check_icon_style' icon={faCheck}></FontAwesomeIcon> {service2}</p>
                    <p className='mb-1'> <FontAwesomeIcon className='check_icon_style' icon={faCheck}></FontAwesomeIcon> {service3}</p>
                    <p className='mb-1'> <FontAwesomeIcon className='check_icon_style' icon={faCheck}></FontAwesomeIcon> {service4}</p>
                    <p className='mb-1'> <FontAwesomeIcon className='check_icon_style' icon={faCheck}></FontAwesomeIcon> {service5}</p>
                </div>
                <div>
                    <button className='btn   bg-green-600 text-white border-0 ring-2 ring-primary mt-10 w-full'>Get Started <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </article>
    );
};

export default Pricing;