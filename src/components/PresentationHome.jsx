const PresentationHome = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3 m-10">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="src/assets/foto-sara-2.jpg"
          alt="sara polimeno"
          className="rounded-lg w-3/4 translate-x-5"
        />
      </div>
      <div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase">
            Chi sono
          </h5>
          <h2 className="mb-8 text-5xl font-marteni">Ti parlo di me</h2>
        </div>
        <div 
        data-aos="fade"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        >
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dolorem obcaecati est suscipit quis recusandae similique assumenda id
          ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus dolores
          labore ipsam corporis!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dolorem obcaecati est suscipit quis recusandae similique assumenda id
          ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus dolores
          labore ipsam corporis!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dolorem obcaecati est suscipit quis recusandae similique assumenda id
          ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus dolores
          labore ipsam corporis!
        </p>
        <ul>
          <li className="list-disc list-inside mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            quaerat veniam nemo eligendi voluptas ipsam excepturi. Fugit fugiat
            vitae recusandae beatae iure saepe, eaque eveniet perferendis
            commodi corporis aperiam voluptas?
          </li>
          <li className="list-disc list-inside mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            quaerat veniam nemo eligendi voluptas ipsam excepturi. Fugit fugiat
            vitae recusandae beatae iure saepe, eaque eveniet perferendis
            commodi corporis aperiam voluptas?
          </li>
        </ul>
        <button
          type="button"
          className="mt-3 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Leggi di più
        </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationHome;
