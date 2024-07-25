import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/" legacyBehavior>
              <a className="logo">
                <Image
                  src="/images/footer.png"
                  className="img-fluid img-responsive"
                  layout="intrinsic"
                  width={100} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="LOGO"
                />
              </a>
            </Link>

            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/groups/947919142367894"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw"
                  target="_blank"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iysa_official/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Registration Link</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Guide Book</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2023 <strong>IYMIA</strong>. Made by{" "}
              <a href="https://www.iysa.or.id" target="_blank">
                IYSA Offical
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
