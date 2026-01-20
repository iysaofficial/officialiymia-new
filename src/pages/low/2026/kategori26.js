import React from "react";
import PageBanner from "@/pages/components/PageBanner";
import Navigation from "@/pages/components/Navigation";
import Footer from "@/pages/components/Footer";
import Link from "next/link";

const kategori24 = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="List of Winners 2026"
        homePageUrl="/low/lowtahun"
        homePageText="Previous Page"
        activePageText="Event Category"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              Choose based on the Category of the event you are participating in
            </h2>
          </div>

          <div className="contact-form">
            {/* <Link
              href="https://drive.google.com/file/d/130AbH5buj7t0Timi5U2tx7Usf583_D2i/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Special Award{" "}
              </a>
            </Link> */}
            <Link href="/low/2026/jenjangofl26" legacyBehavior>
              <a
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                IYMIA OFFLINE{" "}
              </a>
            </Link>
            <Link href="/low/2026/jenjangonl26" legacyBehavior>
              <a
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                IYMIA ONLINE{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default kategori24;
