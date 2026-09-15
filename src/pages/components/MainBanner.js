import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { keadaanPendaftaran } from "@/lib/registrasi";

/**
 * Spanduk halaman depan.
 *
 * ── Kenapa tulisannya tidak lagi dipaku ───────────────────────────────────
 *
 * Di sini tertulis "Coming Soon 2027" dua kali, dan tombolnya dimatikan
 * dengan `pointerEvents: "none"` sambil tetap terlihat seperti tombol — yang
 * membuat orang mengkliknya berulang lalu menyimpulkan halamannya rusak.
 * Ketiganya harus disunting programmer tiap kali pendaftaran dibuka.
 *
 * Sekarang keadaannya datang dari togel di dasbor, dan tombolnya benar-benar
 * membawa ke halaman pendaftaran. Bawaannya tetap "Coming Soon" saat API tidak
 * menjawab: situs yang diam lebih baik daripada situs yang mengundang orang ke
 * pintu yang belum tentu terbuka.
 */
const MainBanner = ({ identitas, guidebook }) => {
  const buka = keadaanPendaftaran(identitas) === "buka";
  const tahun = identitas?.tahun ?? "2027";
  return (
    <>
      <section>
        <div className="banner-wrapper-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="banner-wrapper-content">
                  <span className="sub-title">
                    {buka ? `Registration Open ${tahun}` : `Coming Soon ${tahun}`}
                  </span>
                  <h1>International Young Moslem Inventor Award</h1>
                  {/* Tombolnya hidup di kedua keadaan. Yang datang terlalu awal
                      tetap dibawa ke halaman pendaftaran, dan di sanalah ia
                      diberi tahu kapan harus kembali — bukan dibiarkan menekan
                      tombol mati yang tidak menjelaskan apa pun. */}
                  <Link href="/registration/homeregist" legacyBehavior>
                    <a className="default-btn m-2">
                      {buka ? `Register Now ${tahun}` : `Coming Soon ${tahun}`}
                    </a>
                  </Link>
                  {/* Guidebook muncul hanya kalau panitia sudah menerbitkannya
                      dari dasbor. Dulu tautannya dipaku ke satu berkas Google
                      Drive dan dikomentari begitu edisinya lewat — jadi ia
                      selalu tertinggal satu edisi, dan menghidupkannya kembali
                      menuntut programmer.

                      Tanpa guidebook terbit tombolnya TIDAK ADA, bukan mati:
                      tombol yang terlihat tapi tidak membawa ke mana pun sudah
                      pernah membuat orang menyimpulkan halamannya rusak. */}
                  {guidebook?.url && (
                    <a
                      className="default-btn m-2"
                      href={guidebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Guide Book
                    </a>
                  )}
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="banner-wrapper-image">
                  <div className="banner-img text-center">
                    <ScrollAnimation
                      animateIn="fadeInLeft"
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <Image
                        src="/images/banner/banner-moslem.png"
                        className="img-fluid img-responsive"
                        layout="intrinsic"
                        width={400} // Sesuaikan lebar gambar
                        height={100} // Sesuaikan tinggi gambar
                        alt="BANNER-IMG"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape13">
            <Image
              src="/images/shape/shape15.png"
              className="img-fluid img-responsive"
              layout="intrinsic"
              width={50}
              height={100}
              alt="shape"
            />
          </div>
          <div className="shape14">
            <Image
              src="/images/shape/shape17.png"
              className="img-fluid img-responsive"
              layout="intrinsic"
              width={50}
              height={100}
              alt="shape"
            />
          </div>
          <div className="shape15">
            <Image
              src="/images/shape/shape18.png"
              className="img-fluid img-responsive"
              layout="intrinsic"
              width={200}
              height={100}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
