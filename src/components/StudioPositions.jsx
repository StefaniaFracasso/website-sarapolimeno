const StudioPositions = () => {
  return (
    <div className="flex justify-center mb-5">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase">
          I miei studi
        </h5>
        <h2 className="mb-8 text-5xl font-marteni">Dove ricevo</h2>
        <p className="mb-2">Ti aspetto a Milano presso:</p>
        <ul>
            <li className="list-disc list-inside mb-2">Via Mosè Bianchi 62</li>
            <li className="list-disc list-inside mb-2">Via Tiraboschi 8</li>
            <li className="list-disc list-inside mb-2">Rigenera Clinic p.zza della Repubblica 24</li>
        </ul>
      </div>
      <div>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11191.162932755891!2d9.147369!3d45.4740193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1bde2a1e99f%3A0x3cf348d97e87659b!2sDr.ssa%20Sara%20Anna%20Polimeno%20-%20Biologa%20Nutrizionista%20Milano!5e0!3m2!1sit!2sit!4v1693491115839!5m2!1sit!2sit"
            width="600"
            height="450"
            style={{ border: "0" }} // Utilizzo della sintassi corretta per lo stile
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
    </div>
  );
};

export default StudioPositions;