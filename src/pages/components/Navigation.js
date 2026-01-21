// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/" legacyBehavior>
                <a className="navbar-brand">
                  <Image
                    src="/images/iymia.png"
                    className="img-fluid img-responsive"
                    layout="intrinsic"
                    width={140}
                    height={100}
                    alt="logo"
                  />
                </a>
              </Link>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Media Coverage <i className="fa fa-caret-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/news/newslist"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            News
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1FLTcyYT4NJBDxSkrzlydS2VF0BPzcZsk/view?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2026
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1i-rGeT9hSKNeAWFjimEVL5BBVHyMqhir/view?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2025
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1UVCaBsvxjac-0OF7VCAOfPJEOvskYBsz/view?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2024
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/15kh-LQZkfM7OIu_JuRLl7LhLanf5QdwE/view?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Press Release 2023
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Curation <i className="fa fa-caret-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1GXoYKQu5Ss3v9RdXna3w9LbcFzS3qZeu?usp=drive_link"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2025
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1_SPW8Ez2fjU301tbjBcrCl5VzzckU_vo?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2024
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1DuNcQ9B_iEZ5S2goKD5jBQb8noa_MxpS?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2023
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/low/lowtahun"
                      activeClassName="active"
                      legacyBehavior
                    >
                      <a onClick={toggleNavbar} className="nav-link">
                        List of Winner
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="https://drive.google.com/file/d/12KOp3B-GrDc1hqY72C8AGAp-FswmCK0Q/view?usp=sharing"
                      legacyBehavior
                    >
                      <a onClick={toggleNavbar} className="nav-link" target="_blank">
                        Guide Book
                      </a>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link href="#" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Gallery <i className="fa fa-caret-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1GjuwTFfKCgPSq5Q5Nk4mv0fF1GqjXh_a"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2026
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1DZmHgSOGYVQ4sLlM_A0WDsfrzh-9Daoz"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2025
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1v7k8qwGLENT3xXQHNN5yDR2dq6POKUaR?usp=sharing"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2024
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/gallery"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Gallery 2023
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="#" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Certificate <i className="fa fa-caret-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/drive/folders/1U6k-c7tGm-zBfj-XYSSwKbdlrMDbUQsy"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Certificate Supervisor 2026
                          </a>
                        </Link>
                        <Link
                          href="https://drive.google.com/drive/folders/17HiPX0Oqg-dmy6GayLEtVQ3--VxwUOuA?usp=drive_link"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Certificate Supervisor 2024
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      activeClassName="active"
                      legacyBehavior
                    >
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/faq" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        FAQ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
