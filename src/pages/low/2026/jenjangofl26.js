import React from "react";
import PageBanner from "@/pages/components/PageBanner";
import Navigation from "@/pages/components/Navigation";
import Footer from "@/pages/components/Footer";
import Link from "next/link";

const jenjangofl24 = () => {
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
              Choose based on the Level of the Offline event you are
              participating in
            </h2>
          </div>

          <div className="contact-form">
            <Link
              href="https://drive.google.com/file/d/1sbnogvqpiudICnjhtk64JisdwpUgHhC3/view?usp=sharing"
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
              href="https://drive.google.com/file/d/1PF3Q8tkzqjOupy5-NdViEp_-p2M9Nofc/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Secondary School{" "}
              </a>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qLcaXFxMzrsYv8lwz0_BVdcpomStFIe6/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn default-btn m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Elementary School{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default jenjangofl24;
