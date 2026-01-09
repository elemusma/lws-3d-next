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
    if (menuRef.current) return;
    menuRef.current = true;

    const menuItems = document.querySelectorAll<HTMLElement>(
      ".menu-item-has-children",
    );

    menuItems.forEach((item) => {
      const link = item.querySelector("a");
      const subMenu = item.querySelector(".sub-menu") as HTMLElement;

      if (!link || !subMenu) return;

      // ✅ Accessibility attributes
      link.setAttribute("role", "button");
      link.setAttribute("tabindex", "0");
      link.setAttribute("aria-haspopup", "true");
      link.setAttribute("aria-expanded", "false");

      // ✅ Mouse events
      const mouseoverHandler = () => {
        if (!subMenu.classList.contains("active-sub-menu")) {
          subMenu.classList.add("active-sub-menu");
          let totalHeight = 0;
          subMenu.querySelectorAll("li").forEach((child) => {
            totalHeight += (child as HTMLElement).offsetHeight;
          });
          subMenu.style.height = `${totalHeight}px`;
          link.setAttribute("aria-expanded", "true");
        }
      };

      const mouseoutHandler = () => {
        subMenu.classList.remove("active-sub-menu");
        subMenu.style.height = "0px";
        link.setAttribute("aria-expanded", "false");
      };

      item.addEventListener("mouseover", mouseoverHandler);
      item.addEventListener("mouseout", mouseoutHandler);

      const pressedOnceMap = new WeakMap<HTMLElement, boolean>();

      const keyboardHandler = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          const target = e.currentTarget as HTMLElement;

          const isOpen = subMenu.classList.contains("active-sub-menu");
          const pressedOnce = pressedOnceMap.get(target) || false;

          if (!isOpen || !pressedOnce) {
            e.preventDefault(); // Prevent navigation on first press

            // Open the submenu
            let totalHeight = 0;
            subMenu.querySelectorAll("li").forEach((child) => {
              totalHeight += (child as HTMLElement).offsetHeight;
            });

            subMenu.classList.add("active-sub-menu");
            subMenu.style.height = `${totalHeight}px`;
            link.setAttribute("aria-expanded", "true");

            // Mark that the key has been pressed once
            pressedOnceMap.set(target, true);
          } else {
            // Let navigation happen naturally
            // (no preventDefault)
          }
        }
      };

      link.addEventListener("keydown", keyboardHandler);

      // ✅ Collapse submenu when focus leaves menu item
      item.addEventListener("focusout", function (e) {
        if (!item.contains(e.relatedTarget as Node)) {
          subMenu.classList.remove("active-sub-menu");
          subMenu.style.height = "0px";
          link.setAttribute("aria-expanded", "false");
        }
      });

      // Cleanup
      return () => {
        item.removeEventListener("mouseover", mouseoverHandler);
        item.removeEventListener("mouseout", mouseoutHandler);
        link.removeEventListener("keydown", keyboardHandler);
      };
    });
  }, []);

  return (
    <>
      <ul className="flex justify-end items-center main-menu m-0">
        {/* <li className="menu-item-has-children main-title relative text-left">
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
            
          </ul>
        </li> */}

        <li className="main-title relative text-left">
          <Link
            href="/practice-areas/seo"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/practice-areas/seo")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            SEO
          </Link>
        </li>
        <li className="main-title relative text-left">
          <Link
            href="/practice-areas/web-design"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/practice-areas/web-design")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            Web Design
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
            href="/contact"
            className={`flex items-center gap-1 ${
              pathname.startsWith("/contact")
                ? "text-secondary font-bold active"
                : ""
            }`}
            style={{}}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}
