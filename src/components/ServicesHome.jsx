import SingleService from "./SingleService";


const ServicesHome = () => {
  return (
    <>
      <div className="text-center">
        <div
        data-aos="fade"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        >
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
          Per il tuo benessere
        </h5>
        <h2 className="mb-8 text-5xl font-marteni">I servizi nutrizionali</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-10 mt-16 mb-8"
      data-aos="fade"
      data-aos-offset="400"
      data-aos-easing="ease-in-sine"
      >
        <SingleService
          icon={<img src="/src/assets/icons/weight-scale.png" className="w-1/2 mx-auto my-auto" />}
          name="Percorsi di dimagrimento"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<img src="/src/assets/icons/diet.png" className="w-1/2 mx-auto my-auto" />}
          name="Alimentazione femminile"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<img src="/src/assets/icons/healthy-living.png" className="w-1/2 mx-auto my-auto" />}
          name="Nutrizione clinica"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<img src="/src/assets/icons/nutrition.png" className="w-1/2 mx-auto my-auto" />}
          name="Benessere intestinale"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<img src="/src/assets/icons/healthy-heart.png" className="w-1/2 mx-auto my-auto" />}
          name="Disturbi dell'alimentazione"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<img src="/src/assets/icons/nutrition-plan.png" className="w-1/2 mx-auto my-auto" />}
          name="Educazione alimentare"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        
      </div>
      <div className="flex justify-center">
      <button
          type="button"
          className="mb-10 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Scopri di più
        </button>
      </div>
    </>
  );
};

export default ServicesHome;
