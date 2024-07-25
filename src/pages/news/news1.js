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
        pageTitle="14 Countries Compete in the GYIIF and IYMIA Events"
        homePageUrl="/news/newslist"
        homePageText="Previous Page"
        activePageText="News"
      />
      <section className="news-section">
        <div className="card mb-3 mt-5 mb-5">
          <Image
            src="/images/news/iymia1.jpg"
            className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
            layout="intrinsic"
            width={400} // Sesuaikan lebar gambar
            height={100} // Sesuaikan tinggi gambar
            alt="BANNER-IMG"
          />
          <div className="card-body text-justify">
            <h3 className="card-title col-sm-7">
              Held for the Second Time at IPB, 14 Countries Compete in the GYIIF
              and IYMIA Events.
            </h3>
            <p className="card-text col-sm-7">
              BOGOR – Opening 2024 with two competitions that could be
              considered new, IYSA and the Faculty of Food Science and
              Technology IPB successfully held GYIIF and IYMIA for the second
              time. Once again held in Bogor, GYIIF and IYMIA succeeded in
              inviting 61 teams to attend directly to the venue.
            </p>
            <p className="card-text col-sm-7">
              Even though at this event there were no participants from abroad
              taking part in the offline competition, what was great about this
              competition could be said that we had participants from Sabang to
              Merauke because we had participants from Jambi and Sorong, not
              just one team but several teams came directly to Bogor!
            </p>
            <p className="card-text col-sm-7">
              This time GYIIF and IYMIA were attended by 341 teams which were
              divided into 272 teams participating in the GYIIF event and 69
              teams participating in the IYMIA event. All participants came from
              14 countries including the United Arab Emirates, Uzbekistan,
              Thailand, Iran, the Philippines, Malaysia, Turkey, Mexico,
              Kazakhstan, Romania, India, South Africa, Singapore and of course
              Indonesia.
            </p>
            <p className="card-text col-sm-7">
              Held for 4 days from 11-14 January, the following is a series of
              GYIIF and IYMIA 2024 events. On the first day (11/1), we held an
              opening ceremony at 1 pm and continued with judging for the teams
              taking part in the online competition. On the following day
              (12/1), it was the turn of the teams taking part in the offline
              competition to carry out judging directly with the judges. On the
              third day (13/1), the event was filled with a seminar with
              Dr.-Ing. Dase Hunaefi, STP, MFoodST, who provided material on
              &quot;INVITRO MEAT AND MEAT ANALOG&quot; and continued with the announcement
              of the winning teams that took part in the online competition in
              the evening. Meanwhile, on the last day (14/1) we announced the
              winners for the teams taking part in the offline competition.
            </p>
            <p className="card-text col-sm-7">
              Not only gold, silver and bronze medals, we have also prepared
              many other prizes for the winners including Best Booth, Best
              Presentation, Best Poster, Best Project, IYSA Semi Grand Award,
              IYSA Grand Prize and also several special awards. This time there
              was something special because IPB also gave the Department of Food
              Science and Technology IPB Special Award.
            </p>
            <p className="card-text col-sm-7">
              Congratulations to the team from Mentari Intercultural School who
              succeeded in taking home the main prize in the form of Fully
              Funded to take part in the 2024 WSEEC event at Pancasila
              University Jakarta (terms and conditions apply).
            </p>
            <p className="card-text col-sm-7">
              We also want to congratulate all the winners at both the GYIIF and
              IYMIA events! Let&apos;s continue to work, achieve and develop with
              IYSA. If they can do it, why can&apos;t you? Come achieve your
              achievements with us.
            </p>
            <p className="card-text col-sm-7 mt-5">
              <Link
                href="https://www.depokpos.com/2024/01/digelar-kedua-kalinya-di-ipb-14-negara-bersaing-di-ajang-gyiif-dan-iymia/"
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
