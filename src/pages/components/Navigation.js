// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [menu, setMenu] = React.useState(true);

  /**
   * Guidebook edisi berjalan, diambil dari dasbor.
   *
   * Butir di bawahnya ditulis tangan satu per satu tiap tahun — 2026, 2025,
   * 2024, masing-masing tautan Google Drive. Edisi 2027 sudah diterbitkan
   * panitia lewat dasbor dan tautannya sudah tayang di spanduk halaman depan,
   * tapi menu ini tidak tahu apa-apa soal itu: ia baru berubah kalau ada yang
   * menyuntingnya dan men-deploy situsnya lagi. Yang mencari panduan lewat menu
   * karena itu menemukan tahun lalu sebagai yang terbaru.
   *
   * Diambil di peramban, bukan saat membangun halaman: menu ini dipakai semua
   * halaman, dan sebagiannya statis tanpa `getStaticProps`. Gagal mengambil
   * berarti menu kembali seperti sekarang — bukan menu yang kosong.
   */
  const [panduanTerbit, setPanduanTerbit] = React.useState(null);

  React.useEffect(() => {
    let hidup = true;
    (async () => {
      try {
        const { ambilGuidebook, ambilIdentitas } = await import("@/lib/dashboardApi");
        const [gb, id] = await Promise.all([ambilGuidebook(), ambilIdentitas()]);
        if (hidup && gb?.url) setPanduanTerbit({ url: gb.url, tahun: id?.tahun ?? "" });
      } catch {
        /* Dibiarkan: menu tetap memuat edisi-edisi lama. */
      }
    })();
    return () => { hidup = false; };
  }, []);

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
                          href="https://drive.google.com/drive/folders/1xi-wVhjtvmHLjLI8Tz1Fr2rBGXfebxEb?usp=sharing"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a
                            onClick={toggleNavbar}
                            className="nav-link"
                            target="_blank"
                          >
                            Curation 2026
                          </a>
                        </Link>
                      </li>
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
                  <li className="nav-item">
                    <Link href="#" activeClassName="active" legacyBehavior>
                      <a onClick={toggleNavbar} className="nav-link">
                        Guide Book <i className="fa fa-caret-down"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      {panduanTerbit && (
                        <li className="nav-item">
                          <Link href={panduanTerbit.url} target="_blank" activeClassName="active" legacyBehavior>
                            <a onClick={toggleNavbar} className="nav-link" target="_blank">
                              Guide Book {panduanTerbit.tahun}
                            </a>
                          </Link>
                        </li>
                      )}
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1D-Tra_74Au91ARdcQoN40ugS_mCJq_xg/view?usp=sharing"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link" target="_blank">
                            Guide Book 2026
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/13t_yRxk73cKPfYTnXab2-G36j6j2jYtl/view?usp=sharing"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link" target="_blank">
                            Guide Book 2025
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="https://drive.google.com/file/d/1dz9278fbOcl-EAHTKOMi4sHYRBihnQe-/view?usp=sharing"
                          target="_blank"
                          activeClassName="active"
                          legacyBehavior
                        >
                          <a onClick={toggleNavbar} className="nav-link" target="_blank">
                            Guide Book 2024
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
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
                        <Link href="#" activeClassName="active" legacyBehavior>
                          <a onClick={toggleNavbar} className="nav-link">
                            Certificate Supervisor 2026{" "}
                            <i className="fa fa-caret-down"></i>
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
                                Online
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="https://drive.google.com/drive/folders/16s6ZPlCZqFhRxQZmVJigtAjp53mIuQdp?usp=sharing"
                              activeClassName="active"
                              legacyBehavior
                            >
                              <a
                                onClick={toggleNavbar}
                                className="nav-link"
                                target="_blank"
                              >
                                Offline
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
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
