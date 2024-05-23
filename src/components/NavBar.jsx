import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white drop-shadow-sm flex justify-between px-5 font-semibold py-4 top-0 sticky hide-scrollbar">
        <div className="flex gap-1">
          <i className="bx bx-md bxs-color text-blue-500"></i>
          <h1 className="text-blue-500 text-2xl text-pretty">Organizely</h1>
        </div>

        <div className="hidden lg:flex cursor-pointer gap-4 justify-between">
          <Link
            className="text-blue-500 text-lg hover:text-blue-900 focus:text-blue-900"
            to="home"
          >
            Home
          </Link>
          <Link
            className="text-blue-500 text-lg hover:text-blue-900 focus:text-blue-900"
            to="about"
          >
            About Us
          </Link>
          <Link
            className="text-blue-500 text-lg hover:text-blue-900 focus:text-blue-900"
            to="contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Popover>
            <Popover.Button
              className="relative focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="bx bx-sm bx-menu text-blue-400 hover:text-blue-700 cursor-pointer lg:hidden"></i>
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 top-0">
                <div className="w-[250px] h-screen bg-white font-normal flex flex-col cursor-pointer">
                  <i
                    className="bx bx-x bx-md hover:text-red-500 self-end my-3 mr-3"
                    onClick={() => setIsOpen(false)}
                  ></i>
                  <Link
                    className="text-blue-500 pl-6 text-lg hover:bg-blue-500 hover:text-white py-2"
                    to="home"
                    onClick={() => setIsOpen(false)}
                  >
                    <i class="bx bxs-home"></i> Home
                  </Link>
                  <Link
                    className="text-blue-500 pl-6 text-lg hover:bg-blue-500 hover:text-white py-2"
                    to="about"
                    onClick={() => setIsOpen(false)}
                  >
                    <i class="bx bxs-search-alt-2"></i> About Us
                  </Link>
                  <Link
                    className="text-blue-500 pl-6 text-lg hover:bg-blue-500 hover:text-white py-2"
                    to="contact"
                    onClick={() => setIsOpen(false)}
                  >
                    <i class="bx bx-phone"></i> Contact
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
