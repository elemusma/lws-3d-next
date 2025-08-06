"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "@/app/styles/nav-items.scss";
import "../styles/nav.scss";
// import Logo from "./logo";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import AboutLinks from "./reusable/nav/aboutLinks";
// import CareersLinks from "./reusable/nav/careersLinks";
// import IndustriesLinks from "./reusable/nav/industriesLinks";
// import LocationsLinks from "./reusable/nav/locationsLinks";
// import ProjectsLinks from "./reusable/nav/projectsLinks";
// import ServicesLinks from "./reusable/nav/servicesLinks";

// interface IndustriesLinksProps {
//   onClick?: () => void;
// }

export default function NavItems() {
  const menuRef = useRef<boolean>(false);
  // const router = useRouter();
  // const currentPath = router.pathname;
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    // Prevent multiple initializations
    if (menuRef.current) return;
    menuRef.current = true;

    const handleDropdowns = () => {
      const menuItems = document.querySelectorAll(".menu-item-has-children");

      menuItems.forEach((item) => {
        const subMenu = item.querySelector(".sub-menu") as HTMLElement;

        // if (window.matchMedia("(min-width: 1200px)").matches) {
        // Remove any existing listeners first
        const mouseoverHandler = () => {
          console.log("Mouseover triggered"); // Debugging
          if (subMenu && !subMenu.classList.contains("active-sub-menu")) {
            subMenu.classList.add("active-sub-menu");

            // Calculate dynamic height based on children
            let totalHeight = 0;
            const children = subMenu.querySelectorAll("li");
            children.forEach((child) => {
              totalHeight += (child as HTMLElement).offsetHeight;
            });

            subMenu.style.height = `${totalHeight}px`;
          }
        };

        const mouseoutHandler = () => {
          if (subMenu?.classList.contains("active-sub-menu")) {
            subMenu.classList.remove("active-sub-menu");
            subMenu.style.height = "0px";
          }
        };

        item.addEventListener("mouseover", mouseoverHandler);
        item.addEventListener("mouseout", mouseoutHandler);

        // Cleanup function to remove event listeners
        return () => {
          item.removeEventListener("mouseover", mouseoverHandler);
          item.removeEventListener("mouseout", mouseoutHandler);
        };
        // }
      });
    };

    // Initial setup
    handleDropdowns();

    // Re-run on window resize
    window.addEventListener("resize", handleDropdowns);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleDropdowns);
    };
  }, []);

  return (
    <>
      <ul className="flex justify-end items-center main-menu m-0">
        <li className="menu-item-has-children main-title relative text-left">
          <Link
            href="/practice-areas"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/practice-areas")
                ? "text-secondary font-bold active with-children"
                : ""
            }`}
            style={{}}
          >
            Practice Areas
            <svg
              className="w-2 h-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          <ul
            className="sub-menu absolute left-0 shadow-lg overflow-hidden transition-all duration-300 bg-white p-0 top-[85px]"
            style={{
              height: "0px",
              width: "215px",
            }}
          >
            <li key={"/practice-areas/seo"}>
              <Link
                href={"/practice-areas/seo"}
                className={`block px-4 py-2 ${
                  pathname === "/practice-areas/seo"
                    ? "bg-white !text-[var(--neutral)] active"
                    : ""
                }`}
              >
                SEO
              </Link>
            </li>
            <li key={"/practice-areas/web-design"}>
              <Link
                href={"/practice-areas/web-design"}
                className={`block px-4 py-2 ${
                  pathname === "/practice-areas/web-design"
                    ? "bg-white !text-[var(--neutral)] active"
                    : ""
                }`}
              >
                Web Design
              </Link>
            </li>
            <li key={"/practice-areas/ada-compliance"}>
              <Link
                href={"/practice-areas/ada-compliance"}
                className={`block px-4 py-2 ${
                  pathname === "/practice-areas/ada-compliance"
                    ? "bg-white !text-[var(--neutral)] active"
                    : ""
                }`}
              >
                ADA Compliance
              </Link>
            </li>
            <li key={"/practice-areas/ecommerce"}>
              <Link
                href={"/practice-areas/ecommerce"}
                className={`block px-4 py-2 ${
                  pathname === "/practice-areas/ecommerce"
                    ? "bg-white !text-[var(--neutral)] active"
                    : ""
                }`}
              >
                eCommerce
              </Link>
            </li>
          </ul>
        </li>
        <li className="main-title relative text-left">
          <Link
            href="/about"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/about")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            About
          </Link>
        </li>
        <li className="main-title relative text-left">
          <Link
            href="/podcast"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/podcast")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            Podcast
          </Link>
        </li>
        <li className="main-title relative text-left">
          <Link
            href="/articles"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/articles")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            Articles
          </Link>
        </li>
      </ul>
    </>
  );
}
