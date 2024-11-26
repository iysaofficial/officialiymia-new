import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Timevenue = () => {
  return (
    <div className="partner-area ptb-100">
      <div className="container">
        <div className="partner-title">
          <h2>TIME & VENUE</h2>
        </div>

        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={2}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
            }}
          >
            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/time.jpg"
                className="img-fluid img-responsive"
                layout="intrinsic"
                width={400}
                height={100}
                alt="BANNER-IMG"
              />
            </SwiperSlide>
            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/venue.jpg"
                className="img-fluid img-responsive"
                layout="intrinsic"
                width={300}
                height={100}
                alt="BANNER-IMG"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Timevenue;
