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
                  src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777349326/iymia_3_ajck83.jpg"
                  className="img-fluid img-responsive mt-2"
                  width={400} // Sesuaikan lebar gambar
                  height={300} // Sesuaikan tinggi gambar
                  alt="Foto 1"
                  style={{ objectFit: "cover", width: "100%", height: "340px" }}
                />
                <Link href="/news/news1" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Murid MAN 1 Jembrana Raih Emas di International Young Moslem Inventor Award 2026
                  </h5>
                </Link>
                <p className="card-text">
                  Humas Mansaja (Mustika) — MAN 1 Jembrana sukses mengawali tahun baru 2026 dengan menorehkan prestasi membanggakan di tingkat internasional. Delapan murid yang bergabung dalam Hipotesa tersebut berhasil meraih medali emas dalam ajang International Young Moslem Inventor Award (IYMIA) 2026 yang diselenggarakan secara daring pada tanggal 7 sampai 9 Januari 2026. Kompetisi ini merupakan bagian dari Global Youth Islamic Innovation Festival (GYIIF) 2026 yang digelar oleh Indonesian Young Scientist Association.
                </p>
                <Link href="https://man1jembrana.sch.id/risalah/?p=1900" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <Image
                  src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777349327/iymia_2_gpgqer.jpg"
                  className="img-fluid img-responsive mt-2"
                  width={400} // Sesuaikan lebar gambar
                  height={300} // Sesuaikan tinggi gambar
                  alt="Foto 1"
                  style={{ objectFit: "cover", width: "100%", height: "340px" }}
                />
                <Link href="/news/news1" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Peserta Didik MTsN 41 Jakarta Ikuti Ajang IYMIA 2026 di IPB
                  </h5>
                </Link>
                <p className="card-text">
                  Bogor (Humas MTsN 41 Jakarta) — Peserta didik MTsN 41 Al Azhar Asy Syarif Jakarta mengikuti ajang International Young Moslem Inventor Award (IYMIA) 2026 yang diselenggarakan secara hybrid dan dipusatkan di IPB University, Bogor. Keikutsertaan madrasah ini merupakan bagian dari pembinaan dan pengembangan prestasi peserta didik madrasah di bawah naungan Kementerian Agama Provinsi DKI Jakarta. Kegiatan offline IYMIA 2026 berlangsung selama empat hari, mulai 15 hingga 18 Januari 2026. Pada pembukaan acara, 15 Januari 2026..
                </p>
                <Link href="https://dki.kemenag.go.id/berita/peserta-didik-mtsn-41-jakarta-ikuti-ajang-iymia-2026-di-ipb-pJ7S8" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <Image
                  src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1777349326/iymia_1_nsv6cs.jpg"
                  className="img-fluid img-responsive mt-2"
                  width={400} // Sesuaikan lebar gambar
                  height={300} // Sesuaikan tinggi gambar
                  alt="Foto 1"
                  style={{ objectFit: "cover", width: "100%", height: "340px" }}
                />
                <Link href="/news/news1" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer">
                    Siswa SMP Utama Binaan YBM PLN Raih Gold Medal dan Grand Award di IYMIA 2026
                  </h5>
                </Link>
                <p className="card-text">
                  Prestasi membanggakan kembali diraih oleh siswa SMP Utama, lembaga binaan pendidikan YBM PLN, dalam ajang International Young Moslem Inventor Award (IYMIA) 2026 yang diselenggarakan di IPB Dramaga, Bogor. Kompetisi internasional ini diikuti oleh 364 tim, baik secara daring maupun luring, dari 9 negara.
                  Pada kategori Engineering, dua siswa SMP Utama berhasil meraih Gold Medal, yakni Wivdiana Lethysia (kelas 9) dan Indah Yuliana Putri (kelas 8). Keduanya mengangkat karya ilm......
                </p>
                <Link href="https://ybmpln.org/Kabar/detail/9097/siswa-smp-utama-binaan-ybm-pln-raih-gold-medal-dan-grand-award-di-iymia-2026/6" legacyBehavior>
                  <a className="btn default-btn">Read More...</a>
                </Link>
              </div>
            </div>
          </div>
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
