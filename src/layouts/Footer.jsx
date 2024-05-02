import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-secondary text-white lg:pt-28 pt-8 py-4 font-roboto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:mx-20">
            <div className="lg:w-1/2 lg:mr-20">
              <p className="text-base font-normal max-w-[260px] lg:mt-16">
                Lorem ipsum dolor sit amet consectetur. Tempor bibendum nec.
              </p>
              <p className="text-base font-medium lg:mt-6">Read More</p>
              <div className="flex gap-1 mt-6 lg:mt-8">
                <FaSquareFacebook className="text-4xl" />
                <FaSquareTwitter className="text-4xl" />
                <FaSquarePinterest className="text-4xl" />
                <BiLogoLinkedinSquare className="text-4xl" />
              </div>
            </div>
            <div className="lg:flex lg:gap-20 mt-10 lg:mt-0">
              <div className="mb-10 lg:mb-0">
                <h1 className="text-xl font-bold">Company</h1>
                <ul className="space-y-2 mt-3">
                  <li className="text-base font-medium">
                    <a href="#">About Us</a>
                  </li>
                  <li className="text-base font-medium">
                    <a href="#">Service</a>
                  </li>
                  <li className="text-base font-medium">
                    <a href="#">Case Studies</a>
                  </li>
                  <li className="text-base font-medium">
                    <a href="#">Blog</a>
                  </li>
                  <li className="text-base font-medium">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Get in Touch</h1>
                <ul className="space-y-3 mt-3">
                  <li className="text-base font-normal">
                    <a href="#">support@appie.com</a>
                  </li>
                  <li className="text-base font-normal">
                    <a href="#">+(642) 342 762 44</a>
                  </li>
                  <li className="text-base font-normal">
                    <a href="#">
                      442 Belle Terre St Floor 7, San<br></br>
                      Francisco, AV 4206
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lower-div flex flex-col lg:flex-row justify-between items-center flex-wrap lg:mx-20 mt-20 border-t border-slate-100 ">
            <div className="flex flex-col lg:flex-row gap-2 py-8 ">
              <button className="lg:px-6 lg:py-3 px-2 py-1.5 rounded-lg flex justify-center items-center mt-2 border-2 border-white">
                <svg
                  className="mr-4"
                  width="15"
                  height="16"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.41641 7.55591C9.41641 7.6145 9.32852 9.34302 11.2328 10.2512C10.8812 11.3352 9.65078 13.7375 8.21523 13.7375C7.39492 13.7375 6.92617 13.2102 5.98867 13.2102C5.02187 13.2102 4.49453 13.7375 3.76211 13.7375C2.35586 13.7961 1.0082 11.1594 0.627344 10.0754C0.334375 9.25513 0.217187 8.46411 0.217187 7.70239C0.217187 5.09497 1.9457 3.83521 3.58633 3.80591C4.37734 3.80591 5.37344 4.36255 5.81289 4.36255C6.22305 4.36255 7.36562 3.68872 8.42031 3.77661C9.5043 3.8645 10.3246 4.27466 10.8812 5.06567C9.91445 5.68091 9.41641 6.47192 9.41641 7.55591ZM7.77578 2.75122C7.18984 3.42505 6.48672 3.80591 5.725 3.74731C5.66641 2.9563 5.95937 2.22388 6.48672 1.63794C6.95547 1.1106 7.77578 0.671143 8.47891 0.612549C8.47891 0.934814 8.5668 1.81372 7.77578 2.75122Z"
                    fill="white"
                  />
                </svg>
                <p>Download for iOS</p>
              </button>

              <button className="lg:px-6 lg:py-3  px-2 py-1.5 rounded-lg flex justify-center items-center mt-2 border-2 border-white">
                <svg
                  className="mr-4"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.62148 7.55981L3.14687 1.05591L11.3793 5.802L9.62148 7.55981ZM1.47695 0.675049L8.97695 8.17505L1.47695 15.675C1.09609 15.4993 0.832422 15.1184 0.832422 14.6497V1.72974C0.832422 1.26099 1.09609 0.880127 1.47695 0.675049ZM13.9281 7.29614C14.4848 7.7063 14.4848 8.6731 13.9574 9.08325L12.1996 10.0793L10.266 8.17505L12.1996 6.30005L13.9281 7.29614ZM3.14687 15.2942L9.62148 8.81958L11.3793 10.5774L3.14687 15.2942Z"
                    fill="white"
                  />
                </svg>

                <p>Download for Android</p>
              </button>
            </div>
            <p className="mt-2 lg:mt-0">
              Copyright © 2021 Appie. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
