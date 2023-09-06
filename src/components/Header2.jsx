import { useState, useEffect } from "react";
import logo from "/assets/img/logo-sara.png";
import logoOrizzontale from "/assets/img/logo-orizzontale.png";
import { Link } from "react-router-dom";

const Header2 = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={`flex items-center justify-between bg-white drop-shadow-md ${
        scrolling ? "py-1" : "py-3"
      } px-5 z-50 sticky top-0 transition-all duration-500 ease-in-out`}>
      {/* menù desktop */}
        <div className="flex justify-between items-center hidden md:inline-flex w-full">
          <div>
            <ul className="flex space-x-8">
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <Link to="/" >Home</Link>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <Link to="/chisono"  >Chi sono</Link>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <a href="/laprimavisita"  >La visita</a>
              </li>
            </ul>
          </div>
          <div>
            {scrolling ? (
              <Link to={"/"}>
                <img src={logoOrizzontale} alt="logo" className="h-20" />
              </Link>
            ) : (
              <div className="lg-order-2 transform -translate-x-1/2 left-1/2 top-3 absolute z-40">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="w-32 rounded-full" />
                </Link>
              </div>
            )}
          </div>
          <div>
            <Link to={"/contatti"}>
              <button
                type="button"
                className="mb-4 lg:mb-0 lg:mt-2 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
                data-te-ripple-init
                data-te-ripple-color="light"
                
              >
                Contattami
              </button>
            </Link>
          </div>
      </div>
      {/* menù mobile */}
      <nav className="md:hidden container">
        <div className="flex justify-between items-center">
            <div>
                <img src={logoOrizzontale} alt="logo" className="h-24"/>
            </div>
            <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <Link to={"/"} onClick={closeMenu}>Home</Link>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <Link to={"/chisono"} onClick={closeMenu}>Chi sono</Link>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <Link to={"/laprimavisita"} onClick={closeMenu}>La visita</Link>
              </li>
              <li>
                <Link to={"/contatti"} onClick={closeMenu}>
                    <button
                      type="button"
                      className="mb-10 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Contattami
                    </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Header2;
