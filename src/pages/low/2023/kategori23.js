import React from "react";
import PageBanner from "@/pages/components/PageBanner";
import Navigation from "@/pages/components/Navigation";
import Footer from "@/pages/components/Footer";
import Link from "next/link";

const kategori23 = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="List of Winners 2023"
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
            <Link
              href="https://drive.google.com/file/d/11rYb_keg172E8jhKRUkWbjE4j7QlPDOk/view?usp=sharing"
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
            </Link>
            <Link href="/low/2023/jenjangofl23" legacyBehavior>
              <a
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                IYMIA OFFLINE{" "}
              </a>
            </Link>
            <Link href="/low/2023/jenjangonl23" legacyBehavior>
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

export default kategori23;
