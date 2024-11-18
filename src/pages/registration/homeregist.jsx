import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import { useState } from "react";
import { internationalTerms } from "../data/terms";

function HomeRegist() {

  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setShowModal(true); // Tampilkan modal
  };

  const handleAccept = () => {
    if (termsAccepted) {
      setShowModal(false);
      setTermsAccepted(false); // Reset checkbox untuk penggunaan berikutnya
      window.location.href = redirectLink; // Redirect ke halaman
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };

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
            <button
              className="btn default-btn text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal("/registration/indonesiaparticipants", internationalTerms)
              }
            >
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </button>
            <button
              className="btn default-btn text-center me-lg-5 m-2"
              onClick={() =>
                handleOpenModal(
                  "/registration/internationalparticipants",
                  internationalTerms
                )
              }
            >
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Terms & Conditions</h2>
            <div>{termsContent}</div> {/* Isi dinamis */}
            <div className="checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms"> I agree to the Terms & Conditions</label>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Accept & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeRegist;
