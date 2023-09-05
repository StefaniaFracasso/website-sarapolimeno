const ChiSono = () => {
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3 mx-8 my-20">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <img src="/assets/img/foto-sara-2.jpg" 
          alt="dr.ssa Sara Anna Polimeno" 
          className="rounded-lg w-3/4 translate-x-5"
          />
          <img src="/assets/img/foto-sara-2.jpg" 
          alt="dr.ssa Sara Anna Polimeno" 
          className="rounded-lg w-3/4 translate-x-5"
          />
        </div>
        <div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
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
              dolorem obcaecati est suscipit quis recusandae similique assumenda
              id ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus
              dolores labore ipsam corporis!
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              dolorem obcaecati est suscipit quis recusandae similique assumenda
              id ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus
              dolores labore ipsam corporis!
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              dolorem obcaecati est suscipit quis recusandae similique assumenda
              id ipsa, ratione voluptas nam quam, eveniet quibusdam accusamus
              dolores labore ipsam corporis!
            </p>
            <ul>
              <li className="list-disc list-inside mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                quaerat veniam nemo eligendi voluptas ipsam excepturi. Fugit
                fugiat vitae recusandae beatae iure saepe, eaque eveniet
                perferendis commodi corporis aperiam voluptas?
              </li>
              <li className="list-disc list-inside mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                quaerat veniam nemo eligendi voluptas ipsam excepturi. Fugit
                fugiat vitae recusandae beatae iure saepe, eaque eveniet
                perferendis commodi corporis aperiam voluptas?
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ChiSono;