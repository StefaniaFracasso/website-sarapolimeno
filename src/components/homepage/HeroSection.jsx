import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
      <div className="relative overflow-hidden h-screen bg-cover bg-no-repeat bg-center bg-hero-bg">
        <div className="absolute inset-0 bg-slate-500/50">
          <div className="flex h-full items-center justify-start container mx-auto px-4 py-24 text-white">
            <div className="px-5">
              <h1 className="mb-2 text-6xl font-marteni drop-shadow-lg">Sara Anna Polimeno</h1>
              <h3 className="mb-6 text-2xl font-agrandir-GrandHeavy text-customGreen">Biologo Nutrizionista</h3>
              <Link to={'/contatti'}>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-customPeach"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Contattami
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;