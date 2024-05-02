"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const navigation = [
  { name: "Home", href: "/" }, // Adjusted href values for routing
  { name: "About", href: "/about" },
  { name: "Rides", href: "/rides" },
  { name: "Service", href: "/service" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="container flex  items-center justify-between p-6 lg:px-24"
        aria-label="Global"
      >
        <Link to="/" className="-m-1.5 p-1.5"> {/* Replace anchor tag with Link */}
          <span className="sr-only">Your Company</span>
          <img
            src="img\logo.png"
            className="w-[200px] h-[50px]"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex justify-center items-center   lg:gap-x-12 xl:gap-x-20">
          {navigation.map((item) => (
            <Link // Replace anchor tag with Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold lg:text-base lg:font-medium  xl:text-xl xl:font-medium   leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/request" // Add Link to request page
            className="text-sm xl:text-xl xl:font-medium font-semibold leading-6 text-gray-900 bg-[#D9D9D9] px-8 py-2 rounded"
          >
            Request a quote
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5"> {/* Replace anchor tag with Link */}
              <span className="sr-only">Your Company</span>
              <img
                src="img\logo.png"
                className="w-[200px] h-[50px]"
                alt="Flowbite Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link // Replace anchor tag with Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link // Replace anchor tag with Link
                  to="/request"
                  className="text-sm font-semibold leading-6 text-gray-900 bg-[#D9D9D9] px-6 py-2 rounded"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
