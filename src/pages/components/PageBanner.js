import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl} legacyBehavior>
                  <a>{homePageText}</a>
                </Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="banner-shape1">
          <Image
            src="/images/shape/shape9.png"
            className="img-fluid img-responsive"
            layout="intrinsic"
            width={150} // Sesuaikan lebar gambar
            height={100} // Sesuaikan tinggi gambar
            alt="overview"
          />
        </div>
      </div>
    </>
  );
};

export default PageBanner;