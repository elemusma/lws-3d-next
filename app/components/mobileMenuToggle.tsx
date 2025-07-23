"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useState } from "react";
// import ButtonSquare from "./buttons/btn-square";
import { Company } from "./globals";
import Logo from "./logo";
// import AboutLinks from "./reusable/nav/aboutLinks";
// import CareersLinks from "./reusable/nav/careersLinks";
// import IndustriesLinks from "./reusable/nav/industriesLinks";
// import LocationsLinks from "./reusable/nav/locationsLinks";
// import ProjectsLinks from "./reusable/nav/projectsLinks";
// import ServicesLinks from "./reusable/nav/servicesLinks";
// import SocialIcons from "./social-icons";
import "@/app/styles/popup.scss"; // Import mobile styles
import Sidebar from "./reusable/Sidebar";

const MobileMenuToggle = () => {
  //   const pathname = usePathname(); // Get the current route
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        id="mobileMenuToggle"
        className="openModalBtn nav-toggle"
        title={`mobile menu nav toggle for ${Company}`}
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
        <div style={{ padding: "10px 0px" }}>
          <div className="line-1 bg-accent"></div>
          <div className="line-2 bg-accent"></div>
          <div className="line-3 bg-accent"></div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="mobileMenu"
          className={`modal mobile-menu ${isModalOpen ? "active" : ""}`}
          style={{ display: "block" }}
        >
          {/* Modal Content */}
          <div
            className="bg-white modal-content-menu modal-content"
            style={{
              background: "",
              paddingTop: "50px",
            }}
          >
            {/* Close Button */}
            <span className="close" id="navMenuClose" onClick={handleClose}>
              &times;
            </span>

            {/* Logo Section */}
            <div style={{ width: "100%", maxWidth: "205px" }} id="logoMain">
              <Link
                href="/"
                title={`Homepage link for ${Company}`}
                onClick={handleClose}
              >
                {/** Replace `logoSVG()` with your logo component or JSX */}
                <div className="do-not-hide">
                  <Logo />
                </div>
              </Link>
            </div>
            <div className="h-[25px]"></div>
            {/* <ButtonSquare
              className="" // Adding additional class
              style={{ top: "50%", right: 0, transform: "translate(0, -50%)" }} // Adding inline style
              id="" // Adding an ID
              href="/get-estimate" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare> */}
            {/* <div className="h-[25px]"></div> */}
            {/* <div className="w-full lg:w-1/3 text-right flex justify-start">
              <SocialIcons />
            </div> */}
            <div className="h-[25px]"></div>

            {/* Navigation Menu */}
            <Link
              href="/practice-areas/seo"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              SEO
            </Link>
            <ul className="list-none text-sm mt-0">
              {/* <ServicesLinks onClick={handleClose} /> */}
            </ul>
            <Link
              href="/practice-areas/web-design"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              Web Design
            </Link>
            <ul className="list-none text-sm mt-0">
              {/* <ServicesLinks onClick={handleClose} /> */}
            </ul>
            <Link
              href="/about"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              About
            </Link>
            <ul className="list-none text-sm mt-0">
              {/* <IndustriesLinks onClick={handleClose} /> */}
            </ul>
            <Link
              href="/articles"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              Articles
            </Link>
            <div style={{ height: "25px" }}></div>
            <div className="lg:w-1/5 w-7/12 pr-4 flex justify-end">
              <a
                href="#schedule"
                className="p-1 flex items-center btn-main btn-nav justify-center"
                style={{
                  height: 63,
                  width: 200,
                  borderRadius: 45,
                  display: "flex",
                  margin: 0,
                  //   backgroundColor: "var(--accent-tertiary);",
                }}
              >
                Get More Cases
              </a>
            </div>
            <div style={{ height: "25px" }}></div>
            <Sidebar />
            <ul className="list-none text-sm mt-0">
              {/* <LocationsLinks onClick={handleClose} /> */}
            </ul>
            {/* <Link
              href="/about"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              About
            </Link> */}
            <ul className="list-none text-sm mt-0">
              {/* <AboutLinks onClick={handleClose} /> */}
            </ul>

            {/* <Link
              href="/news"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              News / Blog
            </Link> */}
            {/* <ul className="list-none text-sm mt-0">
              <li>
                <Link
                  href="/news"
                  className="block px-4 py-2"
                  onClick={handleClose}
                >
                  News / Blog
                </Link>
              </li>
            </ul> */}

            {/* <Link
              href="/projects"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              Projects
            </Link> */}
            <ul className="list-none text-sm mt-0">
              {/* <ProjectsLinks onClick={handleClose} /> */}
            </ul>

            {/* <Link
              href="/careers"
              onClick={handleClose}
              className="text-xl font-proxima-bold mb-0"
            >
              Careers
            </Link> */}
            <ul className="list-none text-sm mt-0">
              {/* <CareersLinks onClick={handleClose} /> */}
            </ul>

            {/* <p className="text-xl font-proxima-bold mb-0">Helpful Links</p> */}
            {/* <ul className="list-none text-sm mt-0">
              <li>
                <Link
                  href="/get-estimate"
                  className={`block px-4 py-2 ${
                    pathname === "/get-estimate"
                      ? "bg-white !text-[var(--neutral)] active"
                      : ""
                  }`}
                  onClick={handleClose}
                >
                  Get Free Estimate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block px-4 py-2 ${
                    pathname === "/contact"
                      ? "bg-white !text-[var(--neutral)] active"
                      : ""
                  }`}
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className={`block px-4 py-2 ${
                    pathname === "/faqs"
                      ? "bg-white !text-[var(--neutral)] active"
                      : ""
                  }`}
                  onClick={handleClose}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/about/reviews"
                  className={`block px-4 py-2 ${
                    pathname === "/about/reviews"
                      ? "bg-white !text-[var(--neutral)] active"
                      : ""
                  }`}
                  onClick={handleClose}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/about/po-submittal"
                  className={`block px-4 py-2 ${
                    pathname === "/about/po-submittal"
                      ? "bg-white !text-[var(--neutral)] active"
                      : ""
                  }`}
                  onClick={handleClose}
                >
                  PO Submittal
                </Link>
              </li>
            </ul> */}

            {/* Spacer */}
            <div style={{ height: "25px" }}></div>

            {/* CTA Button */}
            {/* <ButtonSquare
              className="" // Adding additional class
              style={{}} // Adding inline style
              id="" // Adding an ID
              href="/get-estimate" // Dynamic href
              onClick={handleClose}
            >
              Free Estimate!
            </ButtonSquare> */}

            <div style={{ height: "25px" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
