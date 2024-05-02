import React from "react";

const Bio = () => {
  return (
    <>
      {/* story section */}

      <section className=" w-full   md:my-12 my-4 font-roboto">
        <div className="container space-y-8 relative ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black py-3 lg:border-b-[12px] border-b-[8px] border-margin lg:max-w-[286px] md:max-w-[176px] max-w-[136px]   md:mb-8  ">
            Our Story
          </h1>
          <p className="text-lg font-normal lg:max-w-[78%] max-w-full    ">
            Recent experiences have ignited a vision that goes beyond
            traditional transportation. My mother retired from nursing for
            children with cerebral palsy, and I, a former nanny, discovered a
            newfound love for kids with disabilities. A childhood encounter with
            one of my mother's wheelchair-bound patients inspired empathy and a
            mission
          </p>
          <img
            className="2xl:absolute 2xl:left-0 2xl:top-[16rem] px-0 py-0    2xl:container  max-w-full h-auto  "
            src="/img/__before.png"
          ></img>
        </div>
        <div className="w-full   bg-secondary mt-8 2xl:mt-72 text-white">
          <div className="container py-8 md:pt-16 2xl:pt-[24rem] md:pb-[4rem] space-y-6  ">
            <div className="max-w-[773px] space-y-2 ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet "Just Breathe Kids Care,"
              </h2>
              <p className="text-lg normal">
                a transportation venture embodying inclusivity. Our fleet, with
                ramps and secure seating, ensures a safe journey. Staff, beyond
                drivers, provide unwavering support. This isn't just about
                transport; it's about creating a transformative, inclusive space
                for every child, regardless of their abilities.
              </p>
            </div>
            <div className="max-w-[773px] space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                The goal? More than school trips,
              </h2>
              <p className="text-lg normal">
                it's enabling children with disabilities and those without to
                partake in diverse experiences. Just Breathe Kids Care breaks
                barriers, granting freedom to explore and create memories. A
                commitment to a professional yet touching service, symbolizing
                hope and breaking down barriers—one ride at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why choose our app */}
      <section className="container h-auto lg:my-24 my-12  font-roboto  ">
        <div className="mx-16 space-y-6">
          <h1 className="text-3xl md:text-5xl font-black font-roboto text-center">
            Why Choose Our App
          </h1>
          <p className="text-center text-lg  ">
            The full monty spiffing good time no biggie cack grub fantastic.
          </p>
          <div className="flex justify-evenly items-center   flex-wrap gap-6">
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center  space-y-3">
              <img src="img/1st.png" alt="" className="" />
              <p className="font-bold text-[20px]">Easy to use</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3 bg-slate-100">
              <img src="img\2nddiv.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">User Friendly</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3">
              <img src="img/3rddiv.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">Fully Functional</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
            <div className="w-[276px] h-[325px] flex flex-col justify-center items-center space-y-3 bg-slate-50">
              <img src="img/4th.icon (1).png" alt="" className="" />
              <p className="font-bold text-[20px]">Secured Protocol</p>
              <p className="text-center text-base">
                Mucker plastered bugger all mate morish are.
              </p>
              <p className="font-medium text-sm">Read More</p>
            </div>
          </div>
        </div>
      </section>

      {/* why families choose us */}

      <section className=" w-full   bg-secondary lg:py-16  py-4  my-4">
        <div className=" container    text-white flex   gap-12  ">
          <div className=" w-full lg:w-[80%] h-full lg:py-12 py-4    ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
              Why should families choose us
            </h1>
            <div className="pl-10 pt-[21px]">
              <ul className="list-disc text-xl lg:text-2xl">
                <li className="text-xl md:text-2xl font-normal">
                  Specially designed vehicles with ramps: Ensuring accessibility
                  for passengers with mobility challenges.
                </li>

                <li className="text-xl md:text-2xl">
                  Secure seating: Prioritizing safety during travel for all
                  passengers, with options for car seats and booster seats upon
                  request.
                </li>

                <li className="text-xl md:text-2xl">
                  Luxurious leather seats: Enhancing comfort and providing a
                  premium feel throughout the journey.
                </li>

                <li className="text-xl md:text-2xl">
                  Onboard entertainment: Offering personalized entertainment
                  options with headphones provided for each seat, ensuring a
                  customized experience for passengers
                </li>

                <li className="text-xl md:text-2xl">
                  GPS tracking: Providing real-time location tracking of the
                  bus, ensuring safety and allowing for easy monitoring of the
                  journey's progress.
                </li>

                <li className="text-xl md:text-2xl">
                  Onboard cameras: Enhancing security with cameras onboard to
                  monitor passengers, particularly children, ensuring their
                  safety and well-being throughout the ride.
                </li>

                <li className="text-xl md:text-2xl">
                  WiFi on board: Offering WiFi connectivity to passengers,
                  allowing them to stay connected and productive during the
                  journey.
                </li>

                <li className="text-xl md:text-2xl">
                  Easy contact with driver: Facilitating communication with the
                  driver through a dedicated app and providing the cell phone
                  number of the driver for direct contact, ensuring convenience
                  and responsiveness for passengers.
                </li>

                <li className="text-xl md:text-2xl">
                  Climate control: Maintaining a comfortable temperature inside
                  the van, regardless of external conditions.
                </li>

                <li className="text-xl md:text-2xl">
                  Refreshment options: Providing snacks and beverages to keep
                  passengers refreshed during the journey.
                </li>

                <li className="text-xl md:text-2xl">
                  Professional and compassionate staff: Trained individuals who
                  offer support and companionship throughout the journey,
                  ensuring a pleasant and stress-free experience for passengers.
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-[30%] h-auto relative xl:block hidden mt-8">
            <img src="img/Dashboard.png"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
