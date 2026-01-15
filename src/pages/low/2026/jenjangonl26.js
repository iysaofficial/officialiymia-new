import React from "react";
import PageBanner from "@/pages/components/PageBanner";
import Navigation from "@/pages/components/Navigation";
import Footer from "@/pages/components/Footer";
import Link from "next/link";

const jenjangonl24 = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="List of Winners 2026"
        homePageUrl="/low/2026/kategori26"
        homePageText="Previous Page"
        activePageText="Event Level"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              Choose based on the Level of the Online event you are
              participating in
            </h2>
          </div>

          <div className="contact-form">
            <Link
              href="https://drive.google.com/file/d/18sOGAeW33GXW_BM5_qO_OWqxmB8cqtUL/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                University{" "}
              </a>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1YmDJcZPavVhGpW3OykHdT-4N9ntsv2tJ/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Secondary{" "}
              </a>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1dZrumS3vPpLSCheEygM8wL_9OQ5M_Nfj/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Elementary{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default jenjangonl24;
