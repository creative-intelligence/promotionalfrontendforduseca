import React from "react";

const Ridee = () => {
  return (
    <>
      <section className="w-full font-roboto  relative space-y-5 ">
        <div className="container text-black flex justify-between items-center md:my-20 my-8 ">
          <div className="lg:space-y-10 space-y-6 w-full lg:max-w-[80%]  xl:max-w-[70%]  ">
            <h1 className="font-black text-4xl lg:text-5xl xl:text-6xl border-b-8   xl:border-secondary  lg:border-secondary xl:max-w-[540px] lg:max-w-[434px] max-w-[326px] border-secondary">How Does it Works?</h1>
           

            <div>
              <h2 className="font-bold text-2xl">
                Enjoy the ride & Have comfort knowing your child is safe
              </h2>
              <p className="text-xl font-normal">
                To better put your mind at ease, parents are welcome to chat &
                meet with our drivers before boarding their children onto our
                vehicle. Apart from the occurrence of an unforeseen event,
                parents should look forward to their children being transported
                by the same safe, kid-friendly driver throughout their tenure of
                using our service.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl">Complete sign-up forms </h2>
              <p className="text-xl font-normal">
                Before services can be provided, we require each family to
                complete & return a few annual, simple, and easy sign-up forms.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl">Have the kids ready to go</h2>
              <p className="text-xl font-normal">
                Passengers must be prepared for pick up 5-10 minutes before the
                driver is scheduled to arrive. If the passenger is not prepared
                for pick up 5-7 minutes after the driver's arrival, then parents
                will be notified and a later pickup time may be scheduled
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl">Meet the driver</h2>
              <p className="text-xl font-normal">
                To better put your mind at ease, parents are welcome to chat &
                meet with our drivers before boarding their children onto our
                vehicle. Apart from the occurrence of an unforeseen event,
                parents should look forward to their children being transported
                by the same safe, kid-friendly driver throughout their tenure of
                using our service.
              </p>
            </div>
          </div>
          <img
            className=" absolute top-0 right-12 max-w-[30%] h-[512px] xl:block hidden"
            src="img/Group 1171276436.png"
            alt="image here"
          />
        </div>
      </section>
    </>
  );
};

export default Ridee;