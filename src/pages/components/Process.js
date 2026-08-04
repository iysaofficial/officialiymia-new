import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const eventPhotos = [
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-153_jj6ejy.jpg?updatedAt=1781963616522",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-121_xixdfa.jpg?updatedAt=1781963616278",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-73_w6wyvr.jpg?updatedAt=1781963616500",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-38_hbrcha.jpg?updatedAt=1781963615989",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-39_ir7y7a.jpg?updatedAt=1781963615959",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/GYIIF_IYMIA_2026-52_iozcqx.jpg?updatedAt=1781963615907",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/nsif_2_kood8y.jpg?updatedAt=1781963615846",
  "https://ik.imagekit.io/iysaimg/ASSET%20IYSA/nsif_3_dc8pjp.jpg?updatedAt=1781963615809",
];

export default class process extends Component {
  render() {
    return (
      <section className="process-section ">
        <div className="text-center mt-5">
          <span className="sub-title">========</span>
          <h2>Registration Process</h2>
          <br />
          <span className="sub-title">========</span>
        </div>
        <div className="how-it-works-area ptb-100">
          <div className="container">
            <div className="how-it-works-content">
              <div className="number">1</div>

              <h2>How To Register?</h2>
              <div className="video_content">
                <div className="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/DCw862udnZo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="how-it-works-content">
              <div className="number">2</div>
              <h2>After Registered?</h2>
              <div className="video_content">
                <div className="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/YBhdvQ1p5xQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="how-it-works-content">
              <div className="number">3</div>
              <h2>After Movie 2026</h2>
              <div className="video_content">
                <div className="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/VSoDE3tMVIY?si=rRO-RBrxN_sTLOvB"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Slideshow Strip */}
        <div
          style={{
            background:
              "linear-gradient(to right, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%)",
            padding: "5px 0",
            marginTop: "30px",
          }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={"auto"}
            autoplay={{ delay: 2000 }}
            loop={true}
            style={{ padding: "5px 0" }}
          >
            {eventPhotos.map((src, i) => (
              <SwiperSlide
                key={i}
                style={{
                  width: "300px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                  marginRight: "8px",
                }}
              >
                <img
                  src={src}
                  alt={`GYIIF IYMIA 2026 - ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
}
