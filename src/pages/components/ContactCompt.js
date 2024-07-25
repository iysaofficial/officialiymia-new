import Link from "next/link";
import React from "react";

const ContactComp = () => {
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>
              Have questions or need more information? Fill out the form below,
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-form">
            <form
              id="contactForm"
              action="https://formspree.io/f/xzblrvvp"
              method="POST"
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Enter your Full Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      className="form-control"
                      id="phone_number"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      cols="30"
                      rows="6"
                      required
                      placeholder="Enter message..."
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="default-btn">
                    <i className="bx bx-paper-plane"></i> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.838555902752!2d106.7826422!3d-6.4313337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1de9ddf653d9736f!2sIYSA!5e0!3m2!1sen!2sid!4v1660278029079!5m2!1sen!2sid"></iframe>
        </div>
      </div>
      <div className="contact-info-area pb-100">
        <div className="container">
          <div className="contact-info-inner">
            <h2>Have any question in mind please call or mail us</h2>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="fa fa-headset"></i>
                  </div>
                  <h3>
                    <Link href="https://wa.me/6281770914129" legacyBehavior>
                      <a target="_blank">(+62) 817-7091-4129</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h3>
                    <Link href="mailto:iymia.iysa@gmail.com" legacyBehavior>
                      <a>iymia.iysa@gmail.com</a>
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <h3>
                    <Link
                      href="https://goo.gl/maps/9x18coXGCmSscKec6"
                      legacyBehavior
                    >
                      <a target="_blank">
                        Jl. Kemang RT 03 RW 06 Pasir Putih, Depok, Jawa Barat
                        16519, Indonesia.
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
