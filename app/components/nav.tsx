import "../styles/nav.scss";
import Logo from "./logo";

const Nav = () => {
  return (
    <>
      <nav className="fixed inset-x-0 pt-3" style={{ zIndex: "100" }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between -mx-4">
            <div className="lg:w-1/3 w-3/4 px-4 flex items-center">
              <Logo />
            </div>
            {/* end of column */}
            <div className="lg:w-1/3 w-1/2 px-4 flex justify-end">
              <a
                href="#schedule"
                className="p-1 flex items-center btn-main btn-nav justify-center"
                style={{
                  height: 83,
                  width: 200,
                  borderRadius: 45,
                  display: "flex",
                  margin: 0,
                  //   backgroundColor: "var(--accent-tertiary);",
                }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
