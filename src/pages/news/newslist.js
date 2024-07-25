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
        pageTitle="Media Coverage"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News"
      />
      <section className="news-section">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <Image
                  src="/images/news/iymia1.jpg"
                  className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BANNER-IMG"
                />
                <Link href="/news/news1" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Held for the Second Time at IPB, 14 Countries Compete in the
                    GYIIF and IYMIA Events
                  </h5>
                </Link>
                <p className="card-text">
                  BOGOR – Opening 2024 with two competitions that could be
                  considered new, IYSA and the Faculty of Food Science and
                  Technology IPB successfully held GYIIF and IYMIA for the
                  second time. Once again held in Bogor, GYIIF and IYMIA
                  succeeded in inviting 61 teams to attend directly to the
                  venue. Even though at this event there were no participants
                  from abroad taking part in the offline competition what was
                  great about this competition could be said that we had
                  participants from Sabang to Merauke because we had
                  participants from Jambi and Sorong...
                </p>
                <Link href="/news/news1" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <Image
                  src="/images/news/iymia2.jpg"
                  className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BANNER-IMG"
                />
                <Link href="/news/news2" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Unsoed students win gold medals at the 2024 IYMIA
                    international competition
                  </h5>
                </Link>
                <p className="card-text">
                  Students at Jenderal Soedirman University (Unsoed) Purwokerto
                  achieved brilliant achievements by winning a gold medal in the
                  2024 International Young Moslem Invention Award (IYMIA). The
                  team consisting of Khairunnisa (English Language Education
                  2021), Hidayat Nur Wahid (Indonesian Language Education 2020),
                  Muhammad Farrel Ryandra Ardaffa (Agribusiness 2023), Mahila
                  Asana (Agribusiness 2021), and Zia Rahmawati (Physics 2022)
                  managed to win the gold medal in Social Science category...
                </p>
                <Link href="/news/news2" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <Image
                  src="/images/news/iymia3.jpg"
                  className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BANNER-IMG"
                />
                <Link href="/news/news3" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Proud, Unusida Students Win Silver Medals in International
                    Events
                  </h5>
                </Link>
                <p className="card-text">
                  Sidoarjo, NU Online East Java At the beginning of 2024,
                  students from Nahdlatul Ulama University Sidoarjo (Unusida)
                  achieved another achievement in the international arena. This
                  time, students from the Faculty of Computer Science (Filkom)
                  and the Faculty of Teacher Training and Education (FKIP) won
                  Silver Medals in the 2024 International Young Moslem Inventor
                  Award (IYMIA) event organized by the Indonesian Young
                  Scientist Association (IYSA) at the Bogor Agricultural
                  Institute (IPB)...
                </p>
                <Link href="/news/news3" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default news;
