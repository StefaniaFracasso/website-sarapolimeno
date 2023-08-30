import SingleService from "./SingleService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeightScale } from '@fortawesome/free-solid-svg-icons'


const ServicesHome = () => {
  return (
    <>
      <div className="text-center">
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase">
          Per il tuo benessere
        </h5>
        <h2 className="mb-8 text-5xl font-marteni">I servizi nutrizionali</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-10 my-5">
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum tincidunt luctus. Integer id arcu posuere, congue ligula ac, pulvinar."
        />
        <SingleService
          icon={<FontAwesomeIcon icon={faWeightScale} className="text-7xl mx-auto text-customBlue my-auto" />}
          name="Lorem ipsum"
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
