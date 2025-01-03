import { Link } from "react-router-dom";
const StudioPositions = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
              I miei studi
            </h5>
            <h2 className="mb-8 text-5xl font-marteni">Dove ricevo</h2>
          </div>
          <p className="mb-2">Ti aspetto a Milano presso:</p>
          <ul className="mb-4">
            <li className="list-disc list-inside mb-2">Via Correggio 1</li>
            <li className="list-disc list-inside mb-2">
              Rigenera Clinic, p.zza della Repubblica 24
            </li>
          </ul>
          <p className="font-bold text-lg">Se non sei a Milano, posso riceverti online:</p>
          <div>
            <Link to={"/contatti"}>
              <button
                type="button"
                aria-label="link pagina contatti"
                className="mb-4 lg:mb-0 lg:mt-2 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
                data-te-ripple-init
                data-te-ripple-color="light"
                
              >
                Prenota la tua consulenza
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:mt-5">
          <iframe
          title="google maps 1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.85856045149!2d9.153120099999997!3d45.471228499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1bde2a1e99f%3A0x3cf348d97e87659b!2sDr.ssa%20Sara%20Anna%20Polimeno%20-%20Biologa%20Nutrizionista%20Milano!5e0!3m2!1sit!2sit!4v1735914267095!5m2!1sit!2sit"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:mt-5">
          <iframe
          title="google maps 2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.530806421738!2d9.196517775993714!3d45.479254732434384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c72cfa73aa1b%3A0xa658410bf744a2e9!2sRigenera%20Clinic!5e0!3m2!1sit!2sit!4v1693928865498!5m2!1sit!2sit"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StudioPositions;
