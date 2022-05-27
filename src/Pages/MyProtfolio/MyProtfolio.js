import React from 'react';
import myImg from '../../Images/codermdshakil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import skillImg from '../../Images/skill.png';
import projectImg from '../../Images/project.png';




const MyProtfolio = () => {
    return (
        <div className='md:px-20 px-10'>
            <div className='lg:w-8/12 md:w-10/12 md:p-5 p-3 my-10 bg-white custom_shadow rounded-xl   mx-auto'>
                <h2 className='text-center font-semibold md:text-3xl text-lg pt-2 '> <span className='text-secondary'>Welcome </span> <span className='text-primary'> to My  Protfolio</span></h2>
                <div>
                    <img src={myImg} className=" lg:w-5/12  md:w-1/2 w-1/2 mx-auto  ring ring-primary ring-offset-base-100 ring-offset-2  rounded-full  mt-6 mb-3" alt="My_Picture" />
                    <div className='my_infomation md:p-5 p-2'>
                        <h2 className='text-xl'> <FontAwesomeIcon className='text-primary' icon={faUser} /> Full Name</h2>
                        <h4 className='mb-2 text-gray-600'>Md. Shakil Ahmed</h4>
                        <h2 className='text-xl '> <FontAwesomeIcon className='text-primary' icon={faEnvelope} /> Email Address</h2>
                        <h4 className='mb-2 text-gray-600'>ahmedshakil0512@gmail.com</h4>
                        <div>
                            <h2 className='text-xl mb-2 font-md'> <FontAwesomeIcon className='text-primary' icon={faBookOpen} /> Education</h2>
                            <div className='mb-4'>
                                <h3 className='font-semibold text-md'>1.Higher Secondary</h3>
                                <h4 className='text-gray-700 text-md font-md'>HSC (First Year)</h4>
                                <h5>Group: Science</h5>
                                <h5>Year: 2022</h5>
                                <h5>Taragonj H.N High School & College</h5>
                            </div>
                            <div className='mb-4'>
                                <h3 className='font-semibold text-md'>2.Secondary</h3>
                                <h4>SSC</h4>
                                <h5>Group: Science</h5>
                                <h5>Passing Year: 2019-2021</h5>
                                <h5>Ranigonj High School</h5>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <img src={skillImg} className="w-12 h-12 mr-2" alt="skill_img" />
                                <h2 className='text-lg font-semibold'>My Skills as a Web Developer</h2>
                            </div>
                            <ul className='my-3'>
                                <li className='font-semibold text-md'><span className='text-primary'>1. </span> HTML5</li>
                                <li className='font-semibold text-md'><span className='text-primary'>2. </span>CSS3</li>
                                <li className='font-semibold text-md'><span className='text-primary'>3. </span>Tailwind Css</li>
                                <li className='font-semibold text-md'><span className='text-primary'>4. </span>Bootstrap</li>
                                <li className='font-semibold text-md'><span className='text-primary'>5. </span>Javascript (Basic concepts clear)</li>
                                <li className='font-semibold text-md'><span className='text-primary'>6. </span>React (Basic concepts clear)</li>
                                <li className='font-semibold text-md'><span className='text-primary'>7. </span>React Query</li>
                                <li className='font-semibold text-md'><span className='text-primary'>8. </span>React Router</li>
                                <li className='font-semibold text-md'><span className='text-primary'>9. </span>React hook Form</li>
                                <li className='font-semibold text-md'><span className='text-primary'>10. </span>React Firebase hooks</li>
                                <li className='font-semibold text-md'><span className='text-primary'>11. </span>React FontAwsome</li>
                                <li className='font-semibold text-md'><span className='text-primary'>12. </span>React Day Picker</li>
                                <li className='font-semibold text-md'><span className='text-primary'>13. </span>Firebase</li>
                                <li className='font-semibold text-md'><span className='text-primary'>14. </span>MongoDB </li>
                                <li className='font-semibold text-md'><span className='text-primary'>15. </span>Cors</li>
                                <li className='font-semibold text-md'><span className='text-primary'>16. </span>Dotenv</li>
                                <li className='font-semibold text-md'><span className='text-primary'>17. </span>Helmet</li>
                                <li className='font-semibold text-md'><span className='text-primary'>18. </span>DaisyUi</li>
                                <li className='font-semibold text-md'><span className='text-primary'>19. </span>Rechart</li>
                                <li className='font-semibold text-md'><span className='text-primary'>20. </span>Swiper Js</li>
                                <li className='font-semibold text-md'><span className='text-primary'>21. </span>Stripe (For Payment)</li>
                                <li className='font-semibold text-md'><span className='text-primary'>22. </span>React Toastify</li>
                                <li className='font-semibold text-md'><span className='text-primary'>23. </span>Json Web Token (JWT)</li>
                                <li className='font-semibold text-md'><span className='text-primary'>24. </span>Node (Basic concepts clear)</li>
                                <li className='font-semibold text-md'><span className='text-primary'>25. </span>Express (Basic concepts clear)</li>
                            </ul>
                            <div>
                                <div className='flex items-center my-3'>
                                    <img src={projectImg} className="w-12 h-12 mr-2" alt="skill_img" />
                                    <h2 className='text-lg font-semibold'>My Three Best Project's Links:</h2>
                                </div>
                                <ol>
                                    <li className='mt-3 font-semibold'>1.<a href="https://food-warehouse-6436d.web.app/" target="_blank" rel="noopener noreferrer"> <span className='text-primary'>Food WareHouse</span> : https://food-warehouse-6436d.web.app/</a></li>
                                    <li className='font-semibold'>2.<a href="https://carenow-dentist.web.app/" target="_blank" rel="noopener noreferrer"> <span className='text-primary'>Care Now Dentist</span>  : https://carenow-dentist.web.app/</a></li>
                                    <li className='font-semibold'>2.<a href="https://carrental1.netlify.app/" target="_blank" rel="noopener noreferrer">  <span className='text-primary'> Car Rental</span>  : https://carrental1.netlify.app/</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;