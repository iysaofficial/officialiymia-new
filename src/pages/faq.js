import React from "react";
import PageBanner from "./components/PageBanner";
import FAQComp from "./components/faqcomp";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const faq = () => {
  return (
    <>
      <Navigation />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <FAQComp />

      <Footer />
    </>
  );
};

export default faq;