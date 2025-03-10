import Link from "next/link";
import "../styles/footer.scss";
import Logo from "./logo";
import SocialIcons from "./social-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
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
                We allow you to focus on growing your business without having to
                stress about the technical skills of design and programming. Say
                goodbye to flakey freelancers in {currentYear}.
              </p>
              <SocialIcons />
            </div>
            <div className="lg:w-1/3 w-full px-4 pt-5">
              <h2>Tools</h2>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/random-password-generator-with-javascript/"
              >
                Random Password Generator with JavaScript
              </a>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/dividend-yield-calculator/"
              >
                Dividend Yield Calculator
              </a>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/what-is-my-ip-address/"
              >
                What is my IP address?
              </a>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/skills/"
              >
                Website Development Skills
              </a>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/resources/"
              >
                Resources
              </a>
              <a
                className="block"
                target="_blank"
                href="https://resources.latinowebstudio.com/fulfillment-policy/"
              >
                Fulfillment Policy
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute w-full"
          style={{
            height: "50px",
            bottom: "0px",
            left: "0px",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundImage: 'url("/assets/Footer-Party-Bottom.png")',
          }}
        />
      </footer>
    </>
  );
}

export default Footer;
