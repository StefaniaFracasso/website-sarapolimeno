import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="relative bg-customGreen pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-4/12 px-4">
            <h4 className="text-3xl font-marteni text-white">Sara Anna Polimeno</h4>
            <h5 className="text-lg font-agrandirmt-0 mb-2 text-white">Biologo Nutrizionista</h5>
          </div>
          <div className="w-full lg:w-4/12 px-4 flex justify-start lg:justify-center">
            <div>
              <p className="text-white mb-2">Seguimi sui social:</p>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-125 transition duration-150 ease-in-out hover:text-customPeach" type="button">
                <a href="https://www.facebook.com/profile.php?id=100063472213879" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-125 transition duration-150 ease-in-out hover:text-customPeach" type="button">
                <a href="instagram://user?username=saraanna_nutrizionista">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-125 transition duration-150 ease-in-out hover:text-customPeach" type="button">
                <a href="https://www.linkedin.com/in/sara-anna-polimeno-29691994" target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </button>
            </div>
          </div>
          <div className="hidden md:block w-full lg:w-4/12 px-4">
            <div className="flex flex-wrap items-top mb-6 justify-center lg:justify-end">
              <div className="w-full lg:w-auto px-4 ml-auto">
                <a className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white hover:text-customPeach cursor-pointer">Home</a>
                <a className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white hover:text-customPeach cursor-pointer">Chi sono</a>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white hover:text-customPeach cursor-pointer">La prima visita</a>
                <a className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-white hover:text-customPeach cursor-pointer">Contattami</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              {new Date().getFullYear()} | Copyright ©&nbsp;
              <a href="https://stefaniafracasso.netlify.app/" className="text-blueGray-500 italic hover:text-customPeach" target="_blank" rel="noreferrer">
                Stefania Fracasso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;