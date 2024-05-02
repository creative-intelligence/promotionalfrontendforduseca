import React from "react";

const Rform = () => {
  return (
    <section className="container my-20 font-roboto">
        <div className="space-y-8">
        <h1 className="lg:text-6xl md:text-5xl text-4xl py-1 font-black lg:border-b-[14px]  border-margin lg:max-w-[725px]  border-b-[8px] md:max-w-[580px] max-w-[440px]">Frequently Asked Questions</h1>
      <p className="text-2xl font-normal max-w-[995px]">
        Our customized quotes are designed to match your family's unique
        transportation needs and ensure your family with the most amount of
        savings. Click here to receive a quote & start scheduling your child's
        transportation 2-3 business days in advance. Request a quote
      </p>

        </div>
    

      <div className="max-w-full mx-auto md:my-[4.5rem] my-6 ">
        <form className="md:mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block  text-2xl md:text-3xl font-normal">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-4 block w-full rounded-md py-5 bg-slate-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block  text-2xl md:text-3xl font-normal">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-8 block w-full rounded-md py-5 bg-slate-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-2xl md:text-3xl font-normal">
              Question
            </label>
            <textarea
              id="message"
              className="mt-8 block w-full rounded-md py-20 bg-slate-100 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            ></textarea>
          </div>
         
        </form>
      </div>
    </section>
  );
};

export default Rform;
