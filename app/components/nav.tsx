import Link from "next/link";
import "../styles/nav.scss";
import Logo from "./logo";

const Nav = () => {
  return (
    <>
      <nav className="fixed inset-x-0 pt-3 pb-3 bg-white" style={{ zIndex: "100",boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between -mx-4">
            <div className="lg:w-1/3 w-3/4 pl-4 flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="lg:w-1/3 w-1/6 px-4 flex justify-end items-center">
              <Link href="/blog">
                <span style={{textShadow:'1px 1px 1px white'}}>Blog</span>
              </Link>
            </div>
            {/* end of column */}
            <div className="lg:w-1/5 w-1/2 pr-4 flex justify-end">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
