import React from "react";
import PageBanner from "@/pages/components/PageBanner";
import Navigation from "@/pages/components/Navigation";
import Footer from "@/pages/components/Footer";
import Link from "next/link";

const jenjangofl23 = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="List of Winners 2023"
        homePageUrl="/low/2023/kategori23"
        homePageText="Previous Page"
        activePageText="Event Level"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              Choose based on the Level of the Offline event you are
              participating in
            </h2>
          </div>

          <div className="contact-form">
            <Link
              href="https://drive.google.com/file/d/1TkKWdRln2OT2RiQqUFC_8LwmzoxP1g9N/view?usp=sharing"
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
              href="https://drive.google.com/file/d/145w7g0eyneKZ7oLeo1cVKtMuOF_oEDff/view?usp=sharing"
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

export default jenjangofl23;
