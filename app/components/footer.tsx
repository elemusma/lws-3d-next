import Link from "next/link";
import "../styles/footer.scss";
import Logo from "./logo";
import SocialIcons from "./social-icons";

function Footer() {
  // const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className="pt-8 pb-20 text-white"
        style={{
          position: "relative",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="lg:w-1/3 w-full px-4">
              <div className="lg:w-full w-7/12">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="lg:w-1/3 w-full px-4">
              <p className="pt-5">
              We help expert witnesses attract more high-value cases by implementing a targeted, fact-based content strategy without risking damaging content being used against you in deposition.
              </p>
              <SocialIcons />
            </div>
            <div className="lg:w-1/3 w-full px-4 pt-5">
              <h2>Helpful Links</h2>
              {/* <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/random-password-generator-with-javascript/"
              >
                Random Password Generator with JavaScript
              </a> */}
              {/* <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/dividend-yield-calculator/"
              >
                Dividend Yield Calculator
              </a> */}
              {/* <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/what-is-my-ip-address/"
              >
                What is my IP address?
              </a> */}
              {/* <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/skills/"
              >
                Website Development Skills
              </a> */}
              {/* <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/resources/"
              >
                Resources
              </a> */}
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
