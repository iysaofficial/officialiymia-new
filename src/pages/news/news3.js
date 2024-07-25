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
        pageTitle="Unusida Students Win Silver Medals in International Events"
        homePageUrl="/news/newslist"
        homePageText="Previous Page"
        activePageText="News"
      />
      <section className="news-section">
        <div className="card mb-3 mt-5 mb-5">
          <Image
            src="/images/news/iymia3.jpg"
            className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
            layout="intrinsic"
            width={400} // Sesuaikan lebar gambar
            height={100} // Sesuaikan tinggi gambar
            alt="BANNER-IMG"
          />
          <div className="card-body text-justify">
            <h3 class="card-title col-sm-7">
              Proud, Unusida Students Win Silver Medals in International Events
            </h3>
            <p class="card-text col-sm-7">
              Sidoarjo, NU Online East Java At the beginning of 2024, students
              from Nahdlatul Ulama University Sidoarjo (Unusida) achieved
              another achievement in the international arena. This time,
              students from the Faculty of Computer Science (Filkom) and the
              Faculty of Teacher Training and Education (FKIP) won Silver Medals
              in the 2024 International Young Moslem Inventor Award (IYMIA)
              event organized by the Indonesian Young Scientist Association
              (IYSA) at the Bogor Agricultural Institute (IPB), Thursday-Sunday
              (11-14/01/2024).
            </p>
            <p class="card-text col-sm-7">
              The competition was attended by hundreds of participants from
              various countries including Indonesia, Thailand, Africa, Saudi
              Arabia, etc. The Unusida student team consisted of Bonang
              Ramadhani Hidayatullah (Informatics Engineering), Muhammad Af
              Rizal Mumtaz (Information Systems), Yunia Nuri Hidayah (PGSD),
              Ahmad Yauman Syifa (DKV), and Aisyah Adawiyah (PBI).
            </p>
            <p class="card-text col-sm-7">
              Supervisor, Arda Surya Edtya, revealed that all this time he had
              been targeting international competitions that were in line with
              Unusida as an Islamic campus. Therefore, he directed students to
              be able to present an innovative Al-Qur&apos;an learning media system
              that makes deep use of learning and audio integration. This Mumtaz
              application can be an educational medium for teaching and helping
              anyone to memorize and study the Al-Qur&apos;an.
            </p>
            <p class="card-text col-sm-7">
              “We thought of creating a system that can help anyone who wants to
              memorize the Al-Qur&apos;an. &quot;This system then becomes a provision for
              participating in international events,&quot; he said to NU Online East
              Java, Wednesday (17/01/2024). The Head of the Informatics
              Engineering Study Program (Kaprodi) really appreciates the
              potential of students in applying the material they have studied.
            </p>
            <p class="card-text col-sm-7">
              “During the last 2 months, I have tried to direct students to
              create a system to compete in international events. &quot;Thank God,
              students can understand and execute it well,&quot; he said. The team
              leader, Bonang Ramadhani Hidayatullah, explained that he and his
              team created an application called Mumtaz. This application is
              similar to the online Al-Qur&apos;an application, but uses a deep
              learning model which can help anyone learn and memorize the
              Al-Qur&apos;an.
            </p>
            <p class="card-text col-sm-7">
              Through the audio scan feature, it is hoped that a more accurate
              assessment can be made in assessing recitation fluency so that it
              can help evaluate Al-Qur&apos;an alerts read by users. &quot;This application
              uses deep learning methods to assess recitation and punctuation
              fluency. &quot;So it can help those who want to study or memorize the
              Al Qur&apos;an,&quot; he explained.
            </p>
            <p class="card-text col-sm-7">
              The Mumtaz application aims to optimize the use of mobile
              applications to help anyone memorize the Koran with the easiest
              and most enjoyable method. Which can provide benefits such as
              making reading easier, fluency in reading recitation, improving
              reading, and helping rote memory. The Mumtaz application system is
              equipped with many menus to help users learn more about the Koran.
              In general, this application has 5 menus such as digital Al-Qur&apos;an,
              recitation e-book, prayer times, evaluation of Al-Qur&apos;an chanting,
              and tips for memorizing the Al-Qur&apos;an.
            </p>
            <p class="card-text col-sm-7">
              Through a trial survey that had been carried out, he said that of
              the 30 respondents, 72 percent answered that it was very helpful
              and entertaining, 16 percent answered that the Mumtaz application
              was quite helpful and entertaining, and 12 percent answered that
              the Mumtaz application functioned normally. Speed in assessing the
              level of accuracy of the recitation and the location of errors
              when reading are the advantages of this application. So that when
              people learn to read and memorize the Al-Qur&apos;an, they can pay more
              attention to makhorijul letters, recitation and fluency.
            </p>
            <p class="card-text col-sm-7">
              &quot;Indeed, it is currently still in the development stage, so the
              content is still only a short letter. &quot;It needs to be developed
              further before it is used by many people,&quot; he said. Bonang
              revealed that this was the first time he and his team had created
              a project using audio deep learning. However, there are
              Informatics Engineering and Information Systems courses which are
              a reference for completing the designed Mumtaz application.
            </p>
            <p class="card-text col-sm-7">
              &quot;We experienced difficulties because the deep learning method was
              much more difficult because it used coding with a quite
              complicated algorithm system. &quot;Thank God, the team consisting of
              cross-study programs can complement each other so that the Mumtaz
              application can be completed,&quot; he said.
            </p>
            <p class="card-text col-sm-7">
              Meanwhile, team member Muhammad Af Rizal Mumtaz felt very proud
              because he was able to get a medal. Initially he didn&apos;t have time
              to think about winning, he just tried to maximize everything to
              gain experience. &quot;Our motivation is not to disappoint our
              supervisors, so we always try to focus and always maximize every
              stage, from preparation to presentation in front of the jury,&quot; he
              concluded.
            </p>
            <p className="card-text col-sm-7 mt-5">
              <Link
                href="https://jatim.nu.or.id/metropolis/membanggakan-mahasiswa-unusida-raih-medali-perak-di-ajang-internasional-lRDYO"
                legacyBehavior
              >
                <a target="_blank" className="text-muted col-sm-12">
                  Source: Click Here
                </a>
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
