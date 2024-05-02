import React from "react";

const Serve = () => {
  return (
    <>
    {/* Areas Section */}
      <section className="w-full   bg-secondary font-roboto my-8">
        <div className="container xl:h-[846px] flex justify-center xl:gap-8   ">
          <div className="xl:mt-40 lg:my-20 my-10 w-full xl:max-w-[59%] space-y-7 xl:-mr-[9rem]">
            <h1 className=" text-4xl md:text-6xl font-black md:border-b-[12px] md:border-margin md:max-w-[420px] border-b-[8px] border-margin max-w-[254px]  ">Areas we serve</h1>
            <p className="text-xl font-normal">
              David Lawrence Jr. K-8 Center, 15000 Bay Vista Blvd, North Miami,
              FL 33181KLA Schools of North Miami Beach, 13702 Biscayne Blvd,
              North Miami Beach, FL 33181Mater Academy Biscayne North Miami
              Campus, 12900 NE 17th Ave, North Miami, FL 33181 <br></br>Get Smart Kids
              Academy, 1565 NE 125th St, North Miami, FL 33161 <br></br>Von Wedel
              Montessori School, 11820 NE 13th Ave, Miami, FL 33161
            </p>
          </div>

          <div className="mt-5 relative">
            <img className="w-[686px] h-[624px] mt-10 xl:block hidden" src="  public/img/Section → image.png"></img>
            <img className="absolute top-6 right-[4.5rem] xl:block hidden" src="public/img/Track.png"></img>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container my-[4rem]">
        <img className="max-w-[1358] h-auto " src="public/img/map 1.png" alt="" />
      </section>

      
    </>
  );
};
export default Serve;
