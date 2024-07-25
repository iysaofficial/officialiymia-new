import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const PartnerStyle2 = () => {
  return (
    <div className="partner-area ptb-100">
      <div className="container mx-auto">
        <div className="partner-title">
          <h2>ORGANIZED BY</h2>
        </div>

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
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
          }}
        >
          <SwiperSlide className="partner-item">
            <Image
              src="/images/partner/partner3.png"
              className="img-fluid img-responsive"
              layout="intrinsic"
              width={400}
              height={100}
              alt="BANNER-IMG"
            />
          </SwiperSlide>
          <SwiperSlide className="partner-item">
            <Image
              src="/images/partner/partner4.png"
              className="img-fluid img-responsive"
              layout="intrinsic"
              width={400}
              height={100}
              alt="BANNER-IMG"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerStyle2;
