import React from "react";
import FAQ from "react-faq-component";

const Faq = () => {
  const data = {
    rows: [
      {
        title: "What ages of children do you transport?",
        content: "Answer to question 1 goes here...",
      },
      {
        title: "Are your drivers trained to handle children?",
        content: "Answer to question 2 goes here...",
      },
      {
        title:
          "how do you ensure the safety of the children during trnsportation",
        content: "Answer to question 3 goes here...",
      },
      {
        title: "Do you offer car seats or booster seats?",
        content: "Answer to question 1 goes here...",
      },
      {
        title: "Can I track my child's journey in real-time?",
        content: "Answer to question 2 goes here...",
      },
      {
        title:
          "what happens if my child has special needs or require specific accomodations",
        content: "Answer to question 3 goes here...",
      },
      {
        title: "What is your cancellation policy?",
        content: "Answer to question 1 goes here...",
      },
      {
        title: "how far in advance i need to book your service?",
        content: "Answer to question 2 goes here...",
      },
      {
        title: "Do you offer group tranportation for events or parties",
        content: "Answer to question 3 goes here...",
      },
      {
        title: "How do i make a reservation?",
        content: "Answer to question 1 goes here...",
      },
      {
        title:
          "Is it possible for the pick-up location to be right in front of the door?",
        content: "Answer to question 2 goes here...",
      },
      {
        title:
          "what is the estimated time for drop-off,and what happens if the bus is running late?",
        content: "Answer to question 3 goes here...",
      },
      {
        title:
          "what if parents need to cancel the bus pick-up for their child on a specific day due to an emergency?",
        content: "Answer to question 3 goes here...",
      },
      {
        title: "Can a parent add a student yo a bus ride last minute?",
        content: "Answer to question 1 goes here...",
      },
      {
        title: "How are ride estimates calculated?",
        content: "Answer to question 2 goes here...",
      },
    ],
  };

  return (
    <section className="container w-full  mx-auto md:mt-16 mt-8 font-poppins  ">
      <div className="py-10">
        <h1 className="text-center font-bold text-3xl md:text-5xl mb-10 ">
          Frequently Asked Questions
        </h1>
        <FAQ  data={data} />
      </div>
    </section>
  );
};

export default Faq;
