import React from 'react';

import PageBanner from "./components/PageBanner";
import Navigation from "./components/Navigation";
import ContactComp from './components/ContactCompt';
import Footer from "./components/Footer";

const Contact = () => {
  return (
    <>
      <Navigation />
      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default Contact;
