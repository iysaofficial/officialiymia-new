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
        pageTitle="List of Winners 2025"
        homePageUrl="/low/2025/kategori25"
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
              href="https://drive.google.com/file/d/1qJ3NGsbPSPFJTYgBEp-CD98FmezewPIn/view?usp=sharing"
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
              href="https://drive.google.com/file/d/1EGQbj02WElfO0VpWlUfCiNTxgsFJjKH0/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Senior high School{" "}
              </a>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1viRmW9xEw5_8eX5vInloOUbVFNi4Z2GS/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Junior High School{" "}
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
