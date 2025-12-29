"use client";
import Link from "next/link";
import "../styles/nav.scss";
import "../styles/nav-mobile.scss";
import Logo from "./logo";
import MobileMenuToggle from "./mobileMenuToggle";
import { Phone } from "@/app/components/globals";
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
        <div className="container mx-auto px-4">
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
              <MobileMenuToggle />
            </div>
            <div className="lg:w-5/12 w-1/6 justify-end items-center hidden lg:flex">
              <NavItems />
            </div>
            {/* end of column */}
            <div className="lg:w-3/12 w-8/12 pr-4 flex justify-end items-center">
              <a
                href={`tel:+${Phone}`}
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
                {Phone}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
