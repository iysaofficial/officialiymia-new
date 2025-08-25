import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

function HomeRegist() {
  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration IYMIA 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="/registration/homeindo" legacyBehavior>
              <a className="btn default-btn text-center me-lg-5 m-2">
                Indonesia Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="/registration/homeinter" legacyBehavior>
              <a className="btn default-btn text-center me-lg-5 m-2">
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
