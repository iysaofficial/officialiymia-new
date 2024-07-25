import React from "react";
import PageBanner from "../components/PageBanner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const news = () => {
  return (
    <>
      <Navigation />

      <PageBanner
        pageTitle="Unsoed students win gold medals at the 2024 IYMIA international
              competition"
        homePageUrl="/news/newslist"
        homePageText="Previous Page"
        activePageText="News"
      />
      <section className="news-section">
        <div className="card mb-3 mt-5 mb-5">
          <Image
            src="/images/news/iymia2.jpg"
            className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
            layout="intrinsic"
            width={400} // Sesuaikan lebar gambar
            height={100} // Sesuaikan tinggi gambar
            alt="BANNER-IMG"
          />
          <div className="card-body text-justify">
            <h3 className="card-title col-sm-7">
              Unsoed students win gold medals at the 2024 IYMIA international
              competition
            </h3>
            <p className="card-text col-sm-7">
              Students at Jenderal Soedirman University (Unsoed) Purwokerto
              achieved brilliant achievements by winning a gold medal in the
              2024 International Young Moslem Invention Award (IYMIA).
            </p>
            <p className="card-text col-sm-7">
              The team consisting of Khairunnisa (English Language Education
              2021), Hidayat Nur Wahid (Indonesian Language Education 2020),
              Muhammad Farrel Ryandra Ardaffa (Agribusiness 2023), Mahila Asana
              (Agribusiness 2021), and Zia Rahmawati (Physics 2022) managed to
              win the gold medal in Social Science category.
            </p>
            <p className="card-text col-sm-7">
              Khairunnisa explained that his team presented the application
              concept of the Penthahelix model through the lengger dance as a
              medium to introduce mina padi. Their work is entitled
              &quot;Application of the Penta Helix Model using Lengger Dance as
              a Media for Developing Agricultural Potential Based on Local
              Wisdom of Minapadi Banyumas Culture&quot;.
            </p>
            <p className="card-text col-sm-7">
              IYMIA is an applied science competition held by the Indonesian
              Young Scientist Association (IYSA). The categories being competed
              involve the fields of Social Science, Life Science, Engineering,
              Environmental Science and Innovation Science. The Unsoed
              delegation participated in the Social Science category with 341
              teams from 14 countries, including Indonesia, Romania, Malaysia,
              Thailand, the Philippines, Kazakhstan, Turkey, Mexico, United Arab
              Emirates, Iran, Uzbekistan, India, South Africa and Singapore.
            </p>
            <p className="card-text col-sm-7">
              This success shows that Unsoed students have the ability to
              compete internationally, providing inspiration for other students
              to achieve achievements at the global level.
            </p>
            <p className="card-text col-sm-7">
              Judging for the online competition took place on January 11 2024
              via Zoom Meeting, while the announcement of the results (Awarding)
              was delivered on January 13 2024. This achievement is concrete
              proof that Unsoed continues to encourage its students to appear as
              reliable competitors on the international stage.
            </p>
            <p className="card-text col-sm-7 mt-5">
              <Link
                href="https://jateng.antaranews.com/berita/521349/mahasiswa-unsoed-raih-medali-emas-di-kompetisi-internasional-iymia-2024"
                legacyBehavior
              >
                <a target="_blank">Source: Click Here</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default news;
