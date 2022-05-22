import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import banner1 from '../../../Images/banner/banner-1.png';
import banner2 from '../../../Images/banner/banner-2.png';
import banner3 from '../../../Images/banner/banner-3.png';
import './Banner.css';



const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="mt-10 flex items-center justify-center firstSlider_container">
                        <div className="lg:w-1/2 md:1/2 ">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-center py-4">We Keep You <span className="text-secondary font-bold"> Riding</span></h3>
                                <p className="w-10/12  mb-3 mx-auto"> The boy no doubt inherits a capacity for riding a bicycle , otherwise he could never do so. He ran out to his bicycle and pushed the kickstand back while he peered through the window.</p>
                                <button className="btn btn-primary mb-2">Buy Bow</button>
                            </div>
                            <div>
                                <img src={banner2} className="lg:w-full md:w-5/6 sm:w-full mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mt-10 flex items-center justify-center secoundSlider_container">
                        <div className="lg:w-1/2 md:1/2 ">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-center py-4">Make your <span className="text-primary font-bold"> Life</span> Easier</h3>
                                <p className="w-10/12  mb-3 mx-auto"> A bicycle is a useful vehicle that helps us reach a destination without polluting the environment. It is composed of steel and has two wheels. In addition, it has got a seat and handle .</p>
                                <button className="btn btn-secondary text-white mb-2">Buy Bow</button>
                            </div>
                            <div>
                                <img src={banner1} className="lg:w-10/12 md:w-8/12 sm:w-4/12 mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-10 flex items-center justify-center thirdSlider_container">
                        <div className="lg:w-1/2 md:1/2 ">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold text-center py-4">Get a <span className="text-primary font-bold"> Bike</span> Get a Life  </h3>
                                <p className="w-10/12  mb-3 mx-auto"> A bicycle is a useful vehicle that helps us reach a destination without polluting the environment. It is composed of steel and has two wheels. In addition, it has got a seat and handle .</p>
                                <button className="btn btn-secondary text-white mb-2">Buy Bow</button>
                            </div>
                            <div>
                                <img src={banner3} className="lg:w-10/12 md:w-8/12 sm:w-full mx-auto" alt="" />
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;

