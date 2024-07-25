import React, { useState } from "react";

function FAQComp() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };


  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3 mt-5">
                <h2>After Register</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData.map((item, index) => (
                  <div className="card m-2" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h6 className="faq-title fw-bold">
                        <span className="badge">{item.no}</span>
                        {item.question}
                      </h6>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2 className="mt-5">During the Event</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData2.map((item, index) => (
                  <div className="card m-2" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h6 className="faq-title">
                        <span className="badge">{item.no}</span>
                        {item.question2}
                      </h6>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer2}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2 className="mt-5">After the Event</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq">
                {faqData3.map((item, index) => (
                  <div className="card m-2" key={index}>
                    <div
                      className={`card-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <h6 className="faq-title">
                        <span className="badge">{item.no}</span>
                        {item.question3}
                      </h6>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        <a>{item.answer3}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
    </>
  );
}

export default FAQComp;


const faqData = [
  {
    no: "1",
    question: "Minsa, when will we get our LoA? Where will it be sent?",
    answer:
      "After we receive your registration, we will send a confirmation email within 1X24 hours, and for LoA we will send it to the team leader's email address within 3X24 hours after registration.",
  },
  {
    no: "2",
    question:
      "Minsa, I registered one week ago, but why haven't I received my LoA and Invoice yet?",
    answer:
      "Try checking the spam folder on your team leader's email, maybe the email from the IYSA team went to the spam folder.",
  },
  {
    no: "3",
    question: "Where do you upload the competition file?",
    answer:
      "The drive link for uploading files and the link for uploading proof of payment will be included in the invoice.",
  },
  {
    no: "4",
    question:
      "I want to pay the registration fee but how come I can not find the invoice? and where is the payment transferred?",
    answer:
      "Come on, have you read LoA to the end yet? Because we will send the invoice with your teams LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!",
  },
  {
    no: "5",
    question:
      "Minsa, I have already paid the registration fee. Where can I upload the proof of payment?",
    answer:
      "If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too",
  },
  {
    no: "6",
    question: "When will the receipt be sent to us?",
    answer:
      "We will send a receipt for payment in a maximum of 7 working days to the team leaders email, after you have uploaded proof of payment!",
  },
  {
    no: "7",
    question:
      "Minsa, one more week for judging, how come I have not received my teams presentation schedule yet?",
    answer:
      "We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leaders email. Make sure you diligently check the information we provide on the Whatsapp group and also email!",
  },
  // Add more FAQ items as needed
];

const faqData2 = [
  {
    no: "1",
    question2:
      "When will the presentation schedule be given by the committee?",
    answer2:
      "We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders e-mail.",
  },
  {
    no: "2",
    question2:
      "What application used for online presentation? Zoom, Google Meet or something else?",
    answer2:
      "For online judging, we always use the Zoom application and make sure your Zoom application is up to date.",
  },
  {
    no: "3",
    question2: "When will the zoom link be given by the committee?",
    answer2:
      "We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your teams presentation time",
  },
  {
    no: "4",
    question2:
      "how many zoom accounts can join and what should i set my name",
    answer2:
      'You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely "Room Number_Team Leader Name_Institution Name"',
  },
  {
    no: "5",
    question2: "how long will the participants make the presentation?",
    answer2:
      "You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury",
  },
  {
    no: "6",
    question2: "How many judges will come to the offline participants booth?",
    answer2:
      "Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers",
  },
  {
    no: "7",
    question2: "Can we tidy up our booth after being judged?",
    answer2:
      "You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first",
  },
];

const faqData3 = [
  {
    no: "1",
    question3: "When will the winners be announced?",
    answer3:
      "Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book.",
  },
  {
    no: "2",
    question3: "Where can we see the winning results?",
    answer3:
      "You can check the final results on the official website of the event you are participating in",
  },
  {
    no: "3",
    question3: "When will the E-certificate be sent?",
    answer3:
      "IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition",
  },
  {
    no: "4",
    question3: "When is the online delivery of participant certificates?",
    answer3:
      "The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not.",
  },
  {
    no: "5",
    question3: "Where can we get a supervisor certificate?",
    answer3:
      "You can see and download the supervisor certificate on the official website of the event you are participating in",
  },
  {
    no: "6",
    question3: "How to do medal doubling?",
    answer3:
      "For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group, we will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner.",
  },
];