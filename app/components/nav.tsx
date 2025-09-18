"use client";
import Link from "next/link";
import "../styles/nav.scss";
import "../styles/nav-mobile.scss";
import Logo from "./logo";
import MobileMenuToggle from "./mobileMenuToggle";
// import { usePathname } from "next/navigation";
import NavItems from "./navItems";
// import { Phone } from "@/app/components/globals";

const Nav = () => {
  // const pathname = usePathname();

  // const buttonText =
  //   pathname === "/practice-areas/ecommerce"
  //     ? "Build Ecommerce"
  //     : "Get More Cases";

  return (
    <>
      <nav
        className="fixed inset-x-0 bg-white lg:pt-0 lg:pb-0 pt-1 pb-1"
        style={{ zIndex: "100", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between -mx-4">
            <div className="lg:w-1/4 w-3/4 pl-4 flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div
              className="md:w-6/12 w-1/6 px-4 flex flex-wrap block lg:hidden"
              style={{ justifyContent: "end" }}
            >
              {/* <p>menu toggle here</p> */}
              <MobileMenuToggle />
            </div>
            <div className="lg:w-5/12 w-1/6 justify-end items-center hidden lg:flex">
              <NavItems />
              {/* <Link href="/practice-areas/seo" className="px-4">
                <span style={{ textShadow: "1px 1px 1px white" }}>SEO</span>
              </Link> */}
              {/* <Link href="/about" className="px-4">
                <span style={{ textShadow: "1px 1px 1px white" }}>About</span>
              </Link>
              <Link href="/blog" className="px-4">
                <span style={{ textShadow: "1px 1px 1px white" }}>Blog</span>
              </Link> */}
            </div>
            {/* end of column */}
            <div className="lg:w-3/12 w-8/12 pr-4 flex justify-end items-center">
              <a
                href={`/free-blog-article`}
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[15px] h-[15px] mr-[10px]"
                  aria-hidden="true"
                  focusable="false"
                  fill="white"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg> */}
                Get Free Blog Article
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
