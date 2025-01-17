import React, { Component } from "react";

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
              <h2>After Movie 2025</h2>
              <div className="video_content">
                <div className="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/X_DjNOrnvdA?si=bCNuBirJtihlG5Yj"
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
      </section>
    );
  }
}
