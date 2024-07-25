import React from "react";
import PageBanner from "../components/PageBanner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

const lowtahun = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="List of Winners"
        homePageUrl="/"
        homePageText="Home"
        activePageText="List of Winners"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Select by the year of the event you are participating in</h2>
          </div>

          <div className="contact-form">
            <Link href="/low/2024/kategori24" legacyBehavior>
              <a
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2024{" "}
              </a>
            </Link>
            <Link href="/low/2023/kategori23" legacyBehavior>
              <a
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2023{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default lowtahun;
