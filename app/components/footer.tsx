"use client";
import Link from "next/link";
import "../styles/footer.scss";
import Logo from "./logo";
import SocialIcons from "./social-icons";
import { usePathname } from "next/navigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  const pathname = usePathname();
  const submitButtonText =
    pathname === "/practice-areas/ecommerce"
      ? `We build scalable eCommerce platforms with custom user roles, pricing logic, and workflows tailored to how your business operates in ${currentYear}.`
      : `We help expert witnesses attract more high-value cases by implementing a targeted, fact-based content strategy without risking damaging content being used against you in deposition in ${currentYear}.`;
  return (
    <>
      <footer
        className="pt-8 pb-20 text-white"
        style={{
          position: "relative",
        }}
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="lg:w-1/3 w-full px-4">
              <div className="lg:w-full w-7/12">
                <div className="do-not-hide">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="lg:w-1/2 w-full px-4">
              <p className="pt-5">{submitButtonText}</p>
              <SocialIcons />
            </div>
            <div className="lg:w-1/3 w-full px-4 pt-5">
              <h2>Helpful Links</h2>
              <Link
                className="block"
                target="_blank"
                href="/fulfillment-policy"
              >
                Fulfillment Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
