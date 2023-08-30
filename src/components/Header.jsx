import { useState } from "react";
import logo from "../assets/logo-sara.png";
import logoOrizzontale from "../assets/logo-orizzontale.png";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-3 px-5">
      <div className="lg:order-1">
        <nav>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li className="my-4 uppercase hover:text-customGreen text-bold">
              <a href="/about">Home</a>
            </li>
            <li className="my-4 uppercase hover:text-customGreen text-bold">
              <a href="/portfolio">Chi sono</a>
            </li>
            <li className="my-4 uppercase hover:text-customGreen text-bold">
              <a href="/contact">Servizi</a>
            </li>
          </ul>
        </nav>
      </div>
      {isSmallScreen ? (
        <div className="lg:order-1">
          <a href="/">
            <img src={logoOrizzontale} alt="logo" className="w-auto h-32" />
          </a>
        </div>
      ) : (
        <div className="lg-order-2 transform -translate-x-1/2 left-1/2 top-3 absolute z-40">
          <a href="/">
            <img src={logo} alt="logo" className="w-32 rounded-full" />
          </a>
        </div>
      )}
      <div className="lg:order-3">
        <nav>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li className="my-4 uppercase hover:text-customGreen text-bold">
              <a href="/contact">la visita</a>
            </li>
            <li className="my-4 uppercase hover:text-customGreen text-bold">
              <a href="/contact">Consigli alimentari</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        <section className="MOBILE-MENU flex lg:hidden">
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
                <a href="/about">Home</a>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <a href="/portfolio">Chi sono</a>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <a href="/contact">Servizi</a>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <a href="/contact">La visita</a>
              </li>
              <li className="my-4 uppercase hover:text-customGreen text-bold">
                <a href="/contact">Consigli alimentari</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
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
}
