import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import Link from "next/link";

function HomeRegist() {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="Registration"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Home Registration"
      />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto">REGISTRATION FORM</h1>
              <h3 className="mx-auto mt-5 mb-2">
                Choose Categories Participant for Registration IYMIA 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="/registration/indonesiaparticipants" legacyBehavior>
              <a className="btn default-btn text-center me-lg-5">
                Indonesia Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="/registration/internationalparticipants" legacyBehavior>
              <a className="btn default-btn text-center me-lg-5">
                International Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
